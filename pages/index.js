import React from 'react';
import Layout from '../components/layout/Layout';
import ListOfCategories from '../components/category/ListOfCategories';
import ListOfPhotos from '../components/photo/ListOfPhotos';

export default function Home() {
  return (
    <Layout>
      <ListOfCategories />
      <ListOfPhotos />
    </Layout>
  );
}
