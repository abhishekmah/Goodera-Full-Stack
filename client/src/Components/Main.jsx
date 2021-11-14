import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import Navbar from './Navbar';
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [searchtitle, setSearchTitle] = useState('');
    const [detail, setDetail] = useState([]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => {
        axios.get(`http://localhost:1234/job/${id}`).then((data) => {
            setDetail(data);
        });

        console.log('data', id);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios.get('http://localhost:1234/job').then((data) => {
            console.log(data.data.job);
            setData(data.data.job);
        });
    }, []);

    const handleSearch = (search) => {
        axios.get(`http://localhost:1234/job`).then((data1) => {
            var newData = data1.data.job.filter((e) => e.city === search);
            console.log('newData', newData);
            setData(newData);
        });
    };

    const handleSearch1 = (search) => {
        axios.get(`http://localhost:1234/job`).then((data1) => {
            var newData1 = data1.data.job.filter((e) => e.title === search);
            console.log('newData', newData1);
            setData(newData1);
        });
    };

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.blue}>
                    <div className={styles.box}>
                        <Navbar />
                        <br />
                        <br />
                        <h1>Find Your Dream Job</h1>
                        <p>
                            Browse through thousands of full-time or part-time
                            jobs near you
                        </p>
                    </div>
                </div>
                <div className={styles.searchBox}>
                    <div>
                        <input
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            className="titleInput"
                            type="text"
                            placeholder="search with location"
                        />
                    </div>
                    <div>
                        <input
                            onChange={(e) => {
                                setSearchTitle(e.target.value);
                            }}
                            className="titleInput"
                            type="text"
                            placeholder="search for title"
                        />
                    </div>
                    <button
                        onClick={() => {
                            handleSearch(search);
                            setSearch('');
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className={styles.jobs}>
                    {/* <br /> */}
                    <div className={styles.jobsBox}>
                        {data.map((e) => (
                            <div className="dataDiv" key={e.id}>
                                <h1>{e.title}</h1>
                                <p>{e.description}</p>
                                <button
                                    onClick={() => {
                                        handleOpen(e.id);
                                    }}
                                    className="viewDetail"
                                >
                                    View Detail
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
