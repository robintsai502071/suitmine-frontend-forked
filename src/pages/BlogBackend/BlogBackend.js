import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BlogBackend from '../../components/sol/blogBackend/BlogBackend';

function BlogBackendAll() {
  
  return (
    <>

            <BlogBackend />

    </>
  );
}

export default BlogBackendAll;
