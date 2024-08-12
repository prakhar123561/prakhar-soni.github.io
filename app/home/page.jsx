import React from "react"
import Head from "next/head"
import Script from "next/script"
import Image from "next/image"
import 'tailwindcss/tailwind.css'
import Swipe from './swipe'
import Swipe1 from './swipe1'
import ScrollButton from './script'

export default function Home(){
  
  return(<>
    <Head>     
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <title>Nuur - Multipurpose HTML5 Template</title>
      {/* Favicon */}
      <link href="assets/images/favicon.png" rel="shortcut icon" />

      {/* CSS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
    
      <link href="assets/plugins/fontawesome/css/all.css" rel="stylesheet" />
      
</Head>


<body className="bg-[#e8f3ff]" data-preloader="light">
  
  {/* Header */}
  <div className="header header-lg transparent-dark nav-center px-2 relative">
    <div className=" flex justify-between items-center w-full py-8 px-8">
      {/* Logo*/}
      <div>
        <h5 className="uppercase">
          <a
            href="/index.html"
            className="font-outfit font-[500] text-[20px] hover:text-black"
          >
            NUUR
          </a>
        </h5>
      </div>
      <nav className="max-[1024px]:hidden pl-20">
        <ul className="flex justify-evenly items-center ">
          <li style={{ margin: "0 20px 0 0" }}>
            <a
              className="no-underline font-outfit font-semibold text-black-800 hover:text-black hover:underline"
              href="#"
            >
              Home
            </a>
          </li>
          <li style={{ margin: "0 20px 0 0" }}>
            <a
              className="no-underline font-outfit font-semibold text-black-800 hover:text-black hover:underline"
              href="#"
            >
              Pages
            </a>
          </li>
          <li style={{ margin: "0 20px 0 0" }}>
            <a
              className="no-underline font-outfit font-semibold text-black-800 hover:text-black hover:underline"
              href="#"
            >
              Portfolio
            </a>
          </li>
          <li style={{ margin: "0 20px 0 0" }}>
            <a
              className="no-underline font-outfit font-semibold text-black-800 hover:text-black hover:underline"
              href="#"
            >
              Blog
            </a>
          </li>
          <li style={{ margin: "0 20px 0 0" }}>
            <a
              className="no-underline font-outfit font-semibold text-black-800 hover:text-black hover:underline"
              href="#"
            >
              Features
            </a>
          </li>
          <li style={{ margin: "0 20px 0 0" }}>
            <a
              className="no-underline font-outfit font-semibold text-black-800 hover:text-black hover:underline"
              href="#"
            >
              Elements
            </a>
          </li>
          <li style={{ margin: "0 20px 0 0" }}>
            <a
              className="no-underline font-outfit font-semibold text-black-800 hover:text-black hover:underline"
              href="#"
            >
              Section Blocks
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-between items-center w-44">
        <div className="header-extra ms-4 ">
          <a
            className="font-outfit font-normal bg-gradient-to-r from-[#007990] to-[#6CE5C0]  px-4 py-[14px] rounded-3xl shadow-2xl shadow-neutral-300 text-white"
            href="https://1.envato.market/B0vGLJ"
            target="_blank"
          >
            <span data-text="Buy Nuur">Buy Nuur</span>
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle min-[1024px]:hidden"
          onclick="toggle()"
        >
          <span>
            <i className="fa-solid fa-bars text-2xl" />
          </span>
        </button>
      </div>
    </div>
    {/* end container-fluid */}
  </div>
  {/* end Header */}
  <main>
    {/* Hero */}
    <div className="section-spacing">
      <div className="container text-center pt-5">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-center mb-4">
              <div className="pe-3">
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}} />
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}} />
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}} />
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}} />
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}} />
              </div>
              <div>
                <p>We&apos;re trusted by 4,000+ people</p>
              </div>
            </div>
            <h1 className="display-2 font-semibold font-poppins mb-0 ">
              Modern <span className="uppercase" style={{color: "#e8f3ff", textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', fontWeight: "bold"}} >Multipurpose HTML5</span> Template
            </h1>
            <h2 className="font-poppins italic text-3xl text-[#E32227] opacity-70 mt-4">
              Intro Price: $12
            </h2>
          </div>
        </div>
        {/* end row */}
      </div>
    </div>
    {/* end Hero */}
    {/* Features */}
    <div className="section-spacing pt-20">
      <div className="container">
        <div className="row g-4 px-20">
          <div className="col-12 col-lg-6">
            <div className="bg-[#dedef3] flex justify-center items-center p-4 p-md-5 rounded-xl md:flex-row flex-col">
              <div className="mb-2 mb-md-0 me-md-4 me-lg-5 icon-4xl mr-auto">
                <i className="fa-brands fa-bootstrap fa-2xl" style={{ color: "#db3dd6" }}/>
              </div>
              <div>
                <h4 className="text-black font-medium text-2xl">
                  Bootstrap 5.3
                </h4>
                <p className="text-black-700">
                  Nuur is built with the latest version of Bootstrap, which
                  makes it more versatile, and flexible.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="bg-[#d4e9fa] flex justify-center items-center p-4 p-md-5 rounded-xl md:flex-row flex-col">
              <div className="mb-2 mb-md-0 me-md-4 me-lg-5 icon-4xl mr-auto">
                <i className="fa-regular fa-gem fa-2xl" style={{ color: "#74C0FC" }}/>
              </div>
              <div>
                <h4 className="text-black font-medium text-2xl">
                  Carefully Handcrafted
                </h4>
                <p className="text-black-700">
                  Each and every one of the pages are carefully handcrafted by a
                  professional UI &amp; UX designer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="bg-[#d4e9fa] flex justify-center items-center p-4 p-md-5 rounded-xl md:flex-row flex-col">
              <div className="mb-2 mb-md-0 me-md-4 me-lg-5 icon-4xl mr-auto">
                <i className="fa-solid fa-arrows-spin fa-2xl" style={{ color: "#74C0FC" }}/>
              </div>
              <div>
                <h4 className="text-black font-medium text-2xl">
                  Lifetime Free Update
                </h4>
                <p className="text-black-700">
                  We&apos;ll be continuously updating the template by adding new
                  demos, features, and elements.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="bg-[#dedef3] flex justify-center items-center p-4 p-md-5 rounded-xl md:flex-row flex-col">
              <div className="mb-2 mb-md-0 me-md-4 me-lg-5 icon-4xl mr-auto">
                <i className="fa-solid fa-layer-group fa-2xl" style={{ color: "#db3dd6" }}/>
              </div>
              <div>
                <h4 className="text-black font-medium text-2xl">
                  Highly Organized
                </h4>
                <p className="text-black-700">
                  In order to save your valuable time, We made everything from
                  code to overall structure highly organized.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
    {/* end Features */}
    {/* Portfolio */}
    <div className="section-spacing-sm pt-20">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-3 fw-medium">
            <span className="font-outfit font-semibold bg-gradient-to-r from-pink-600 to-indigo-800 inline-block text-transparent bg-clip-text">
              Pre-made Website Demos
            </span>
          </h2>
        </div>
        {/* Previews */}
        <div className="row custom-row mt-xl-0" data-cues="slideInUp">
          {/* 1 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-4 g-md-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-business.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-business.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-business.html"
                      >
                        Business
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 ">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-business/about.html"
                        >
                          - About
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-business/clients.html"
                        >
                          - Clients
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-business/services.html"
                        >
                          - Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-business/contact.html"
                        >
                          - Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 2 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-corporate.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-corporate.jpg"
                      alt=""
                      width={400}
                    height={400}
                      data-rjs={2}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-corporate.html"
                      >
                        Corporate
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-corporate/about.html"
                        >
                          - About
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-corporate/clients.html"
                        >
                          - Clients
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-corporate/services.html"
                        >
                          - Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-corporate/contact.html"
                        >
                          - Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 3 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-creative-agency.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-creative-agency.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-creative-agency.html"
                      >
                        Creative Agency
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-creative-agency/about.html"
                        >
                          - About
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-creative-agency/prices.html"
                        >
                          - Prices
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-creative-agency/services.html"
                        >
                          - Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-creative-agency/contact.html"
                        >
                          - Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 4 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-interior.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-interior.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-interior.html"
                      >
                        Interior Studio
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-interior/about.html"
                        >
                          - About
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-interior/prices.html"
                        >
                          - Prices
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-interior/services.html"
                        >
                          - Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-interior/contact.html"
                        >
                          - Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 5 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-marketing.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-marketing.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-marketing.html"
                      >
                        Marketing
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-marketing/about.html"
                        >
                          - About
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-marketing/prices.html"
                        >
                          - Prices
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-marketing/services.html"
                        >
                          - Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-marketing/contact.html"
                        >
                          - Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 6 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-media-agency.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-media-agency.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-media-agency.html"
                      >
                        Media Agency
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-media-agency/about.html"
                        >
                          - About
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-media-agency/prices.html"
                        >
                          - Prices
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-media-agency/portfolio.html"
                        >
                          - Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-media-agency/services.html"
                        >
                          - Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-media-agency/contact.html"
                        >
                          - Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 7 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a className="d-block hover-float" href="/index-startup.html">
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-startup.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-startup.html"
                      >
                        Startup
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-startup/about.html"
                        >
                          - About
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-startup/services.html"
                        >
                          - Services
                        </a>
                      </li>
                      <li>
                        <a
                          className="link-hover-line"
                          href="/pages-startup/contact.html"
                        >
                          - Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 8 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-portfolio-fullwidth.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-portfolio-fullwidth.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-portfolio-fullwidth.html"
                      >
                        Portfolio Fullwidth
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/portfolio/portfolio-single-3.html"
                        >
                          Portfolio Single
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 9 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-portfolio-horizontal.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-portfolio-horizontal.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-portfolio-horizontal.html"
                      >
                        Portfolio Horizontal
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/portfolio/portfolio-single.html"
                        >
                          Portfolio Single
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 10 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-portfolio-vertical.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-portfolio-vertical.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-portfolio-vertical.html"
                      >
                        Portfolio Vertical
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/portfolio/portfolio-single.html"
                        >
                          Portfolio Single
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 11 */}
          <div className="col-12 col-xl-6 custom-col">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <a
                    className="d-block hover-float"
                    href="/index-portfolio-grid.html"
                  >
                    <Image
                      className="rounded-xl shadow-2xl shadow-neutral-400"
                      src="/assets/images/splash-portfolio-grid.jpg"
                      alt=""
                      data-rjs={2}
                      width={400}
                    height={400}
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-xl-5">
                  <div className="ps-md-4 pt-2 pt-md-0">
                    <h3>
                      <a
                        className="font-outfit font-semibold text-3xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        href="/index-portfolio-grid.html"
                      >
                        Portfolio Grid
                      </a>
                    </h3>
                    <h6 className="font-outfit font-normal text-xl text-slate-400 mt-3">
                      Subpages:
                    </h6>
                    <ul className="font-outfit font-medium text-base leading-7 list-none">
                      <li>
                        <a
                          className="link-hover-line"
                          href="/portfolio/portfolio-single.html"
                        >
                          Portfolio Single
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
          {/* 12 */}
          <div className="col-12 col-xl-6 custom-col d-none d-xl-block">
            <div className="px-20 pb-10">
              <div className="row g-2 align-items-center">
                <div className="col-12 col-md-6 col-xl-7 transition ease-in delay-150 hover:-translate-y-1 duration-150">
                  <Image
                    className="rounded-xl shadow-2xl shadow-neutral-400"
                    src="/assets/images/moredemos.png"
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              {/* end row(inner) */}
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
    {/* end Portfolio */}

    <div>
  {/* Sliding Text */}
  <div className="swiper sliding-text w-full h-100">
    <div
      className="swiper-wrapper "
      style={{
        color: "#e8f3ff",
        textShadow:
          "-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
      }}
    >
      
      <Swipe1/>
      
      
    </div>
  </div>
  {/* end Sliding Text */}
</div>


    {/* Elements */}
    <div className="section-spacing-sm">
      <div className="container">
        <div className="text-center">
          <h2 className="display-3 fw-medium mb-5">
            <span className="font-outfit font-semibold bg-gradient-to-r from-pink-600 to-indigo-800 inline-block text-transparent bg-clip-text">
              UI Elements
            </span>
          </h2>
          <ul className=" grid gap-5 min-[1024px]:grid-cols-3 grid-rows-5 ">
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/accordion.html"
              >
                <i className="bi bi-chevron-bar-down pe-2" />
                Accordion
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/background-colors.html"
              >
                <i className="bi bi-paint-bucket pe-2" />
                Background Colors
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/background-media.html"
              >
                <i className="bi bi-aspect-ratio pe-2" />
                Background Media
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/background-patterns.html"
              >
                <i className="bi bi-border pe-2" />
                Background Patterns
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/blockquote.html"
              >
                <i className="bi bi-quote pe-2" />
                Blockquote
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/box.html"
              >
                <i className="bi bi-box-seam pe-2" />
                Box
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/buttons.html"
              >
                <i className="bi bi-cursor pe-2" />
                Buttons
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/forms.html"
              >
                <i className="bi bi-input-cursor pe-2" />
                Forms
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/images.html"
              >
                <i className="bi bi-image pe-2" />
                Images
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/lightbox.html"
              >
                <i className="bi bi-zoom-in pe-2" />
                Lightbox
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/link-hovers.html"
              >
                <i className="bi bi-link pe-2" />
                Link Hovers
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/lists.html"
              >
                <i className="bi bi-list-ol pe-2" />
                Lists
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/maps.html"
              >
                <i className="bi bi-map pe-2" />
                Maps
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/process.html"
              >
                <i className="bi bi-123 pe-2" />
                Process
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/progress-bar.html"
              >
                <i className="bi bi-sliders2 pe-2" />
                Progress bar
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/rotating-text.html"
              >
                <i className="bi bi-arrow-clockwise pe-2" />
                Rotating Text
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/sliding-box.html"
              >
                <i className="bi bi-layout-split pe-2" />
                Sliding Box
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/sliding-text.html"
              >
                <i className="bi bi-type-italic pe-2" />
                Sliding Text
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/team.html"
              >
                <i className="bi bi-people pe-2" />
                Team
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/testimonial.html"
              >
                <i className="bi bi-chat-square-quote pe-2" />
                Testimonial
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/text-highlights.html"
              >
                <i className="bi bi-highlighter pe-2" />
                Text Highlights
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/title-fade.html"
              >
                <i className="bi bi-type pe-2" />
                Title Fade
              </a>
            </li>
            <li>
              <a
                className="bg-white px-8 py-3 rounded-md shadow-2xl shadow-neutral-400 mb-3 transition ease-in-out delay-150 hover:text-indigo-500 duration-300 hover:text-black"
                href="/elements/typography.html"
              >
                <i className="bi bi-alphabet-uppercase pe-2" />
                Typography
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* end Elements */}
    {/* Sliding Testimonial section */}
    <div className=" mt-10">
      <div className="swiper sliding-boxes w-full  h-100 pt-10">
        <div className="swiper-wrapper">
          <Swipe />
        </div>
        {/* end swiper-wrapper */}
      </div>
      {/* end swiper */}
    </div>
    {/* end Sliding Testimonial section */}
    {/* Footer */}
    <div className="py-5 bg-black mt-10">
      <div className="container">
        <div className="row g-2 ">
          <div className="col-12 col-md-6 text-center md:text-start">
            <p className="text-white font-outfit font-medium text-base">
              © 2024 FlaTheme, All Rights Reserved.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center md:text-end">
            <ul className="flex leading-5 justify-end items-center mr-20">
              <li>
                <a className="text-white ml-10" href="#">
                  About us
                </a>
              </li>
              <p
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  marginLeft: 5,
                  marginRight: 5
                }}
              />
              <li>
                <a className="text-white " href="#">
                  FAQ
                </a>
              </li>
              <p
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  marginLeft: 5,
                  marginRight: 5
                }}
              />
              <li>
                <a className="text-white " href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
    {/* end Footer */}
  </main>
  
  {/* Scroll to Top */}
  <ScrollButton/>
{/* end Scroll to Top */}

  {/* Background Vertical lines */}
  <div className="bg-lines-3 bg-lines-animated">
    <div className="line-1" ></div>
    <div className="line-2" ></div>
    <div className="line-3" ></div>
  </div>
  {/* end Background Vertical lines */}

  {/* JavaScripts */}
		<Script src="https://kit.fontawesome.com/9eae89ba84.js" crossorigin="anonymous"></Script>
		<Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></Script>
  </body>
</>

    )
}