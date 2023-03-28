import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {PostService} from "../API/PostService";
import Loader from "../components/UI/loading/loader";
import {useFetching} from "../hooks/useFetching";


const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div>
            <h1>You open page of post wit ID = {params.id}</h1>
            {
                isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {
                isCommentLoading
                ? <Loader/>
                : <div>
                        {comments.map(c =>
                            <div style={{margin: 15}}>
                                <h5>{c.email}</h5>
                                <div>{c.body}</div>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default PostIdPage;
