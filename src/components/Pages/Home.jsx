import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <div className='home-tour-container'>
                <h1>Tours</h1>
                <div className='home-tour-container-table'>
                    <table className='home-tour-table'>
                        <tbody>
                            <tr>
                                <td>JUL 16</td>
                                <td>DETROIT, MI</td>
                                <td>DTE ENERGY MUSIC THEATRE</td>
                                <td><button>BUY TICKETS</button></td>
                            </tr>
                            <tr>
                                <td>JUL 19</td>
                                <td>TORONTO,ON</td>
                                <td>BUDWEISER STAGE</td>
                                <td><button>BUY TICKETS</button></td>
                            </tr>
                            <tr>
                                <td>JUL 16</td>
                                <td>DETROIT, MI</td>
                                <td>DTE ENERGY MUSIC THEATRE</td>
                                <td><button>BUY TICKETS</button></td>
                            </tr>
                            <tr>
                                <td>JUL 16</td>
                                <td>DETROIT, MI</td>
                                <td>DTE ENERGY MUSIC THEATRE</td>
                                <td><button>BUY TICKETS</button></td>
                            </tr>
                            <tr>
                                <td>JUL 16</td>
                                <td>DETROIT, MI</td>
                                <td>DTE ENERGY MUSIC THEATRE</td>
                                <td><button>BUY TICKETS</button></td>
                            </tr>
                            <tr>
                                <td>JUL 16</td>
                                <td>DETROIT, MI</td>
                                <td>DTE ENERGY MUSIC THEATRE</td>
                                <td><button>BUY TICKETS</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home