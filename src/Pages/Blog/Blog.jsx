import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {

    const { data: blogs, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/blogs`);
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <h3>This is blog page:{blogs?.length}</h3>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">

                {
                    blogs?.map(blog => {
                        return (
                            <div className="card w-96 bg-base-100 shadow-xl" key={blog?._id}>
                                <figure><img src={blog?.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{blog?.title}</h2>
                                    <p>
                                        {
                                            blog?.content.length > 200
                                                ?
                                                <p>{blog?.content.slice(0, 200)} [...]</p>
                                                :
                                                blog?.content

                                        }
                                    </p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/blogs/${blog?._id}`}><button className='btn btn-outline btn-primary'>See Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default Blog;