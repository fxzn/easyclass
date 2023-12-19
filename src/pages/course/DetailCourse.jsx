import { Link, useParams } from "react-router-dom";
import "./Detailcourse.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock, faLock, faShield, faStar, faPlayCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavigationBars from "../../components/navigation/NavigationBars";
import Footerr from "../../components/footer/Footerr";

import { useEffect, useState } from "react";
import ModalBeliCourse from "./ModalBeliCourse";
import { getCourseDetail } from "../../../service/Course.service";
// import getVideoId from 'get-video-id';

function DetailCourse() {
  const [showModal, setShowModal] = useState(false);
  const [courseDetail, setCourseDetail] = useState([]);
  const [subjectResponse, setsubjectresponse] = useState([]);

  const { title } = useParams();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCourseDetail(title);
        setCourseDetail(response.data.addCourseResponse);

        setsubjectresponse(response.data.subjectResponse);
      } catch (error) {
        console.error("Error saat mengambil detail kursus:", error);
      }
    };

    fetchData();
  }, [title]);

  // console.log(subjectResponse.title);
  // subjectResponse.map((subject) => {
  //   console.log("Title:", subject.title);
  //   console.log("Code:", subject.code);
  //   console.log("Link:", subject.link);
  //   console.log("Description:", subject.description);
  //   console.log("Is Premium:", subject.isPremium);
  // });

  return (
    <>
      <NavigationBars />
      <div className="container detail-course">
        <div className="row">
          <div className="col-md-8 left-content">
            <div className="top-navigation">
              <Link to="/" className="d-flex align-items-start ">
                <FontAwesomeIcon icon={faArrowLeft} />
                <p className="kelas-lain">Kelas Lainnya</p>
              </Link>
            </div>
            <div className="course-details">
              <div className="d-flex justify-content-between align-items-center mb-">
                <h5 className="text-judul">{courseDetail.title}</h5>
                <span className="d-flex ">
                  <FontAwesomeIcon icon={faStar} className="" />
                  <p className="rating">4.7</p>
                </span>
              </div>
              <h5 className="font-weight-bold mb-1">{courseDetail.about}</h5>
              <p className="fasilator-name">By {courseDetail.teacher}</p>
              <div className="d-flex flex-wrap align-items-center mb-3 info-course">
                <div className="d-flex mb-2">
                  <FontAwesomeIcon icon={faShield} className="" />
                  <p className="text-course-info">{courseDetail.level}</p>
                </div>
                <span className="d-flex mb-2">
                  <FontAwesomeIcon icon={faBook} />
                  <p className="text-course-info">{courseDetail.module} Module</p>
                </span>
                <span className="d-flex mb-2">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="text-course-info">{courseDetail.duration}</p>
                </span>
              </div>
              <div>
                <button className="btn btn-telegram" onClick={handleOpenModal}>
                  {courseDetail.price > 0 ? "Premium" : "Gratis"}
                </button>
              </div>
            </div>
            <div>
              <div className="video-content mb-3">
                {subjectResponse.map((subject, index) => (
                  <iframe
                    key={index}
                    className="vidio"
                    src={subject.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen 
                  ></iframe>
                ))}
              </div>
            </div>

            <div className="tentang-kelas">
              <h1 className="font-weight-bold mb-3 mt-7">Tentang Kelas</h1>

              <p>{courseDetail.description}</p>
            </div>
            <div className="mb-5">
              <h1 className="font-weight-bold mb-3">Kelas Ini Ditujukan Untuk</h1>
              <ol className="list-decimal">
                <li>Anda yang ingin memahami poin penting design system</li>
                <li>Anda yang ingin membantu perusahaan lebih optimal dalam membuat design produk</li>
                <li>Anda yang ingin latihan membangun design system</li>
                <li>Anda yang ingin latihan membangun design system</li>
              </ol>
            </div>
          </div>
          <div className="col-md-4 ">
            <Card className="mb-2">
              <Card.Body className="jutify-content-center ">
                <div className="d-flex align-items-center gap-2=">
                  <div className="d-flex justify-content-between w-50 align-items-center">
                    <h1 className="header-content">Materi Belajar</h1>
                  </div>
                  <div className="position-relative">
                    <label className="position-absolute progress-text">90% Progress</label>
                    <progress className="rounded-strip" id="progress" value="60" max="100"></progress>
                  </div>
                </div>

                <div>
                  <div className="d-flex justify-content-between mt-5 mb-3 header-chapter">
                    <p className="text-dark">Chapter 1 - Pendahuluan</p>
                    <p className="text-dark"> 40 Menit</p>
                  </div>

                  <ol>
                    {subjectResponse.map((subject, index) => (
                      <li key={index} className="my-2 d-flex justify-content-between align-items-center">
                        <p className="d-flex gap-3 align-items-center">
                          <span className="p-1 align-items-center justify-content-center">{index + 1}</span>
                          {subject.title}
                        </p>
                        <FontAwesomeIcon icon={faPlayCircle} className="icon-play text-dark w-10 h-full" />
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="d-flex justify-content-between header-chapter">
                    <p className="text-dark font-weight-bold">Chapter 2 - Materi</p>
                    <p className="text-dark font-weight-bold"> 120 Menit</p>
                  </div>
                  <ol>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">1</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faLock} className="icon-lock" />
                    </li>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">2</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faLock} className="icon-lock" />
                    </li>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">3</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faLock} className="icon-lock" />
                    </li>
                    <li className="my-2 d-flex justify-content-between align-items-center">
                      <p className="d-flex gap-3 align-items-center">
                        <span className="p-1 align-items-center justify-content-center">4</span>
                        Anda yang ingin memahami poin penting design system
                      </p>
                      <FontAwesomeIcon icon={faLock} className="icon-lock" />
                    </li>
                  </ol>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <ModalBeliCourse title={courseDetail.title} showModal={showModal} handleCloseModal={handleCloseModal} />

      <Footerr />
    </>
  );
}

export default DetailCourse;
