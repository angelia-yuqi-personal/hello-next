import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/MyLayout.js';

class Post extends React.Component {
  render() {
    const { router } = this.props;
    // console.log(router);
    return (
      <Layout>
        <h1>{router.query.title}</h1>
        <p>This is the blog post content.</p>
      </Layout>
    );
  }
}

export default withRouter(Post);
