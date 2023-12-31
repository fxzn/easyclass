import Footerr from '../../components/footer/Footerr';
import NavigationBars from '../../components/navigation/NavigationBars';
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faBook,
  faStar,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import imgcourse from '../../assets/image.png';
import invoice_1649585 from '../../assets/invoice_1649585.png';
import './History.css';
import Bars from './Bar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SyncLoader } from 'react-spinners';

const CourseCard = ({ order }) => {
  const { title, about, teacher, level, duration, module, price, isPremium } =
    order;

  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  return (
    <Col md={12} className="d-flex justify-content-center mt-3">
      <Card className="cardkursus" style={{ width: '400px', height: '190px' }}>
        <Card.Img variant="top" src={imgcourse} style={{ height: '65px' }} />
        <Card.Body>
          <div className="title mt-0" id="text1">
            {title}
          </div>
          <Card.Text className="desc mt-0" id="text2">
            {about}
            <div className="fw-bold">{teacher}</div>
          </Card.Text>
          <div className="d-flex infocourse1" style={{ margin: '-8px 0' }}>
            <div className="level me-4 d-flex">
              <div>
                <FontAwesomeIcon icon={faStar} className="img" />
              </div>
              <p className="ms-1 mt-0">{level}</p>
            </div>
            <div className="level me-4 d-flex">
              <div>
                <FontAwesomeIcon icon={faBook} className="img" />
              </div>
              <p className="ms-1 mt-0">{module} modul</p>
            </div>
            <div className="level me-4 d-flex">
              <div>
                <FontAwesomeIcon icon={faClock} className="img" />
              </div>
              <p className="ms-1 mt-0">{duration}</p>
            </div>
          </div>
          <Button
            variant="danger"
            style={{ height: '22px', fontSize: '10px' }}
            className="d-flex align-items-center justify-content-center"
          >
            {formatIDR(price)}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const UserProfile = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token tidak ditemukan.');
          return;
        }

        const orderResponse = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/course/getCourseOrder`,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrderHistory(orderResponse.data.data);
      } catch (error) {
        console.error('Error fetching data:', error.response);
      } finally {
        setIsLoading(false); // Setelah selesai fetching, atur isLoading menjadi false
      }
    };

    fetchData();
  }, []);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <>
      <NavigationBars />
      <section>
        <div className="tainer-profile">
          <div className="profileForm">
            <div className="akun-header">
              <h2>Akun</h2>
            </div>
            <div className="bar">
              <Bars />
            </div>
            <div className="profileFormm">
              <Row className="kard">
                <span className="arrow1">
                  <Link to="/Bar">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      style={{ fontSize: '24px', color: '#151515' }}
                    />
                  </Link>
                </span>

                {/* Periksa jika tidak ada pesanan dalam riwayat */}
                {orderHistory.length === 0 && !isLoading && (
                  <div className="text-center mt-3">
                    <img
                      src={invoice_1649585}
                      alt="Tidak Ada Riwayat Pembayaran"
                      style={{
                        marginTop: '35%',
                        color: '#151515',
                        marginLeft: '7%',
                      }}
                    />
                    <h1
                      style={{
                        color: '#333',
                        fontSize: '18px',
                        marginTop: '15px',
                      }}
                    >
                      No payment history available
                    </h1>
                  </div>
                )}

                {/* Render CourseCard untuk setiap pesanan dalam orderHistory */}
                {orderHistory.length > 0 &&
                  orderHistory
                    .slice(0, 2)
                    .map((order, index) => (
                      <CourseCard key={index} order={order} />
                    ))}

                {showAllCards &&
                  orderHistory
                    .slice(2)
                    .map((order, index) => (
                      <CourseCard key={index} order={order} />
                    ))}

                {orderHistory.length > 2 && (
                  <div className="text-center mt-3">
                    <Button variant="primary" onClick={toggleShowAllCards}>
                      {showAllCards ? 'Tampilkan sedikit' : 'Tampilkan Semua'}
                    </Button>
                  </div>
                )}

                {isLoading && (
                  <div className="spinner-container">
                    <SyncLoader color={'#fa4c4c'} loading={isLoading} />
                  </div>
                )}
              </Row>
            </div>
          </div>
        </div>
      </section>
      <Footerr />
    </>
  );
};

export default UserProfile;
