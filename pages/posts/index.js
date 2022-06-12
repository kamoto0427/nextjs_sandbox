import Link from "next/link";

export default function index({ posts }) {
    return (
        <div>
            <h1>POST一覧</h1>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.POST_DATA_URL}`);
    console.log(res);
    const posts = await res.json();
    return { props: { posts } };
}