import Head from 'next/head';
import ContainersList from '../components/ContainersList';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className="mainPage">
            <ContainersList />
        </div>
    );
}
