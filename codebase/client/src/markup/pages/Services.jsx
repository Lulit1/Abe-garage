import React from "react";
import backgroundImage from "../../assets/images/background/bg-5.jpg";
import TopBanner from "../components/TopBanner/TopBanner";

const Services = () => {
	return (
		<div>
			<TopBanner title="Services" subtitle="Home" bgImage={backgroundImage} />
			<section className="services-section style-three">
				<div className="auto-container">
					<div className="sec-title style-two">
						<h2>Services that we offer</h2>
						<div className="text">
							Bring to the table win-win survival strategies to ensure proactive
							domination. At the end of the day, going forward, a new normal
							that has evolved from generation X is on the runway heading
							towards a streamlined cloud solution.{" "}
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 service-block-one">
							<div className="inner-box hvr-float-shadow">
								<h5>Service and Repairs</h5>
								<h2>Performance Upgrade</h2>
								<a href="service-details.html" className="read-more">
									read more +
								</a>
								<div className="icon">
									<span className="flaticon-power"></span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 service-block-one">
							<div className="inner-box hvr-float-shadow">
								<h5>Service and Repairs</h5>
								<h2>Transmission Services</h2>
								<a href="service-details.html" className="read-more">
									read more +
								</a>
								<div className="icon">
									<span className="flaticon-gearbox"></span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 service-block-one">
							<div className="inner-box hvr-float-shadow">
								<h5>Service and Repairs</h5>
								<h2>Break Repair & Service</h2>
								<a href="service-details.html" className="read-more">
									read more +
								</a>
								<div className="icon">
									<span className="flaticon-brake-disc"></span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 service-block-one">
							<div className="inner-box hvr-float-shadow">
								<h5>Service and Repairs</h5>
								<h2>Engine Service & Repair</h2>
								<a href="service-details.html" className="read-more">
									read more +
								</a>
								<div className="icon">
									<span className="flaticon-car-engine"></span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 service-block-one">
							<div className="inner-box hvr-float-shadow">
								<h5>Service and Repairs</h5>
								<h2>Tyre & Wheels</h2>
								<a href="service-details.html" className="read-more">
									read more +
								</a>
								<div className="icon">
									<span className="flaticon-tire"></span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 service-block-one">
							<div className="inner-box hvr-float-shadow">
								<h5>Service and Repairs</h5>
								<h2>Denting & Painting</h2>
								<a href="service-details.html" className="read-more">
									read more +
								</a>
								<div className="icon">
									<span className="flaticon-spray-gun"></span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 service-block-one">
							<div className="inner-box hvr-float-shadow">
								<h5>Service and Repairs</h5>
								<h2>Air Conditioning Evac</h2>
								<a href="service-details.html" className="read-more">
									read more +
								</a>
								<div className="icon">
									<span className="flaticon-air-conditioning"></span>
								</div>
							</div>
						</div>
						<div className="col-lg-4 service-block-one">
							<div className="inner-box hvr-float-shadow">
								<h5>Service and Repairs</h5>
								<h2>General Service & Washing</h2>
								<a href="service-details.html" className="read-more">
									read more +
								</a>
								<div className="icon">
									<span className="flaticon-car-service"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="video-section">
				<div
					data-parallax='{"y": 50}'
					className="sec-bg"
					// style="background-image: url(assets/images/background/bg-1.jpg);"
					// <div data-parallax="{&quot;y&quot;: 50}" class="sec-bg" style="transform:translate3d(0px, 50px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); -webkit-transform:translate3d(0px, 50px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); background-image: url(assets/images/background/bg-1.jpg);"></div>
				></div>
				<div className="auto-container">
					<h5>Working since 1992</h5>
					<h2>
						We are leader <br /> in Car Mechanical Work
					</h2>
					<div className="video-box">
						<div className="video-btn">
							<a
								href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
								className="overlay-link lightbox-image video-fancybox ripple"
							>
								<i className="flaticon-play"></i>
							</a>
						</div>
						<div className="text">
							Watch intro video <br /> about us
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
