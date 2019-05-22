import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
// import githubService from "../services/githubService"
import styled from "styled-components"

import { Card, Row, Col, Icon } from "antd"

const Repos = () => {
  const [mode, setMode] = React.useState('dark')
  const [didCopy, setDidCopy] = React.useState(false)
  const [repos, setRepos] = React.useState([])

  React.useEffect(() => {
    async function getData() {
      const url = 'https://api.github.com/users/Omar-Gee/repos'
      const response = await fetch(url).then(res => res.json())
      setRepos(response)
    }
    getData()
  }, [])
  const handleCopyToClipboard = (id) => {
    setDidCopy(true)
    const url = document.getElementById(id)
    url.select()
    document.execCommand("copy");
    setTimeout(() => {
      setDidCopy(false)
    }, 4000);
  }
  return (
    <>
      <Layout mode={mode}>

        <Header mode={mode} setMode={setMode} />
        <SEO title="Github Repositories" />
        {didCopy && <ConfirmCopy> Clone URL Copied to Clipboard!</ConfirmCopy>}
        <h1>Github Repositories</h1>
        <Row type="flex" justify="space-around" gutter={64}>
          {
            repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(githubItem =>
              <Col key={githubItem.name} xs={24} sm={24} md={12} lg={8} xl={8}>

                <StyledCard
                  title={githubItem.name}
                >
                  <p>{githubItem.description}</p>
                  <div onClick={() => handleCopyToClipboard(githubItem.name)}>
                    <Input id={githubItem.name} type="text" value={githubItem.clone_url} readOnly />
                    <Icon type="copy" />
                    <span>Git Clone</span>
                  </div>
                </StyledCard>
              </Col>
            )
          }
        </Row>
        <Link to="/">Go back to the homepage</Link>
      </Layout>

    </>
  )
}
export default Repos

const StyledCard = styled(Card)`
        margin: 24px 0;
        color: green;
        min-height: 200px;
  .ant-card-head-title {
          text - align: center;
      }
    `

const Input = styled.input`
  z-index: -3;
  position: absolute;
`
const ConfirmCopy = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  background: green;
  color: white;
  width: 100%;
`