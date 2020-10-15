import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Member</h2>
    <p>1.)นายชุติวัต  เจี้ยนติ้ว  รหัสนักศึกษา : 6010110088</p>
    <p>2.)นางสาวอัจจิมาพร  สุภารัตน์  รหัสนักศึกษา : 6010110399</p>
    <p>3.)นายเอกพล  รามแก้ว  รหัสนักศึกษา : 6010110416</p>
    <p>4.)นายพิชญะ  ชิตกุล  รหัสนักศึกษา : 6010110695</p>
    <p>5.)นายพีรดนย์  กิ้มปาน รหัสนักศึกษา : 6010110697</p>
    <p>6.)นายวสุพล  เจียมสุขสุจิตต์  รหัสนักศึกษ : 6010110729</p>

    <Link to="/">Go back to menu page</Link>
  </Layout>
)

export default SecondPage