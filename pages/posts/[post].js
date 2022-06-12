export default function post({ post }) {
    return (
        <div>
            <h1>POST(投稿){post.id}</h1>
            <h2>{post.title}</h2>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const id = params.post;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return { props: { post } };
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    const paths = posts.map((post) => ({
        params: { post: post.id.toString() },
    }))
    return {
        paths,
        fallback: false,
    }
}