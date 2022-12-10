import React from 'react';
import { toast } from 'react-hot-toast';

const Admin = () => {
    const handleBlogForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const content = form.content.value;

        const blogInfo = {
            title,
            photo,
            content
        }
        console.log(form, blogInfo);

        fetch('http://localhost:5000/blogs', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogInfo),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        toast.success('Blog Create Successfully');
        form.reset();

    }
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
                    <div className="card flex-shrink-0 w-3/4 shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleBlogForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Post title</span>
                                </label>
                                <input name='title' type="text" placeholder="Post title" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Post image link</span>
                                </label>
                                <input name='photo' type="text" placeholder="Post image link" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Content</span>
                                </label>
                                <textarea name='content' className="textarea textarea-bordered" placeholder="Blog Content"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;