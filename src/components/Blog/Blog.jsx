import React from "react";
import "./Blog.css";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";

const Blog = () => {
  return (
    <div>
      <section className="blog-out mb">
        <Back
          name="Blog"
          title="Blog Grid - Our Blog"
          cover="../images/list/p-7.png"
        />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </div>
  );
};

export default Blog;
