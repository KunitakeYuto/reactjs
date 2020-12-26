import Link from "next/link";
import style from "../static/Style";
import Counter from "../components/Counter";
import Layout from "../components/Layout";

export default () => (
    <Layout header="Next" title="Top page.">
        <p>Welcome to next.js</p>
        <hr />
        <Link href="./other">
            <button>
                go to Other &gt;&gt;
            </button>
        </Link>
    </Layout>
);