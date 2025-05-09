import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
    *[_type=="startup" && defined(slug.current) && !defined($search) || title match "*" + $search + "*" || category match  "*" + $search + "*" || author->name match "*" + $search + "*"] | order(_createdAt desc) {
  _id, 
  title, 
  slug, 
  _createdAt, 
  author -> {
    _id, name, image, bio
  },
  views, 
  description,
  category, 
  image,
  pitch
} `);

export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(`
  *[_type=="startup" && !defined($userId) ||  author._ref == $userId]  | order(_createdAt desc) {
_id, 
title, 
slug, 
_createdAt, 
author -> {
  _id, name, image, bio
},
views, 
description,
category, 
image,
pitch
} `);

export const STARTUP_BY_ID_QUERY =
	defineQuery(`*[_type=="startup" && _id == $startupId][0] {
  _id, 
  title, 
  slug, 
  _createdAt, 
  author -> {
    _id, name, username, slug, image, bio
  },
  views, 
  description,
  category, 
  image,
  pitch
} `);

export const VIEWS_BY_ID_QUERY =
	defineQuery(`*[_type=="startup" && _id == $startupId][0] {
  _id,
  views, 
} `);

export const AUTHOR_BY_GITHUB_ID_QUERY =
	defineQuery(`*[_type=="author" && id == $authorId][0] {
  _id,
  id,
  name, 
  username, 
  email, 
  image, 
  bio
}	`);

export const AUTHOR_BY_ID_QUERY =
	defineQuery(`*[_type=="author" && _id == $authorId][0] {
  _id,
  id,
  name, 
  username, 
  email, 
  image, 
  bio
}	`);
