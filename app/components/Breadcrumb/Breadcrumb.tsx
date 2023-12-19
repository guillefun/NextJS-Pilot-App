'use client'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from './Breadcrumb.module.css'
import { Grow } from '@mui/material'
import { motion } from 'framer-motion'

const _GetTextGenerator = (param: any, query: any) => null
const _GetDefaultTextGenerator = (path: any, href: any) => path

// Pulled out the path part breakdown because its
// going to be used by both `asPath` and `pathname`
const generatePathParts = (pathStr: string) => {
  const pathWithoutQuery = pathStr.split('?')[0]
  return pathWithoutQuery.split('/').filter((v) => v.length > 0)
}

export default function Breadcrumb() {
  // Gives us ability to load the current route details
  const router = useRouter()
  const pathname = usePathname()
  const query = useSearchParams()

  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = pathname.split('?')[0]

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0)

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
      // The title will just be the route string for now
      const hasNumber = /\d/
      let title = subpath
      let hrefSplit = href.split('/')

      if (hrefSplit.length <= 3) {
        if (hasNumber.test(href) && href.includes('posts')) {
          title = `Post details`
        }
      }

      return { href: href, text: title }
    })

    // Add in a default "Home" crumb for the top-level
    return [ ...crumblist] // { href: '/posts', text: 'Posts' },
  }

  // Call the function to generate the breadcrumbs list
  // const breadcrumbs = generateBreadcrumbs()

  const breadcrumbs = generateBreadcrumbs()

  return (
    <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      {...({ timeout: 400 })}
    >
      <Breadcrumbs
        className={styles.crumb}
        aria-label="breadcrumb"
        separator="›"
      >
        {breadcrumbs.map((crumb, idx) => (
          <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
        ))}
      </Breadcrumbs>
    </Grow>
  )
}

function Crumb({
  text,
  href,
  last = false,
}: {
  text: any
  href: any
  last: boolean
}) {
  if (last) {
    return <span>{text}</span>
  }

  return (
    <Link className={styles.crumblink} href={href}>
      {text}
    </Link>
  )
}
