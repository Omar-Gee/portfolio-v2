import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
// import githubService from "../services/githubService"
import styled from "styled-components"
import 'antd/dist/antd.css';
import { Card, Row, Col, Icon, Divider, Alert } from "antd"

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
      <Layout mode='light'>

        <Header mode={mode} setMode={setMode} />
        <SEO title="Github Repositories" />
        {didCopy && <ConfirmCopy> Clone URL Copied to Clipboard!</ConfirmCopy>}
        <Alert message="This page is a work in progess" type="error" style={{ textAlign: 'center', fontSize: '2rem', margin: '2rem 0'}} />
        <h1>Github Repositories</h1>
        <Divider />
        <Row type="flex" justify="space-around" gutter={64}>
          {
            repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, repos.length - 3).map(githubItem =>
              <Col key={githubItem.name} xs={24} sm={24} md={12} lg={8} xl={7}>

                <StyledCard
                  title={githubItem.name}
                >
                  <p>{githubItem.description}</p>
                  <ul>
                    <li onClick={() => handleCopyToClipboard(githubItem.name)}>
                      <Input id={githubItem.name} type="text" value={githubItem.clone_url} readOnly />
                      <Icon type="copy" />
                      <span>Git Clone</span>
                    </li>
                    <li>
                      <a href={githubItem.html_url} target="_blank" rel="noopener noreferrer">
                        <Icon type="link" />
                        <span>Repo</span>
                      </a>
                    </li>
                    {
                      githubItem.homepage ?
                        <li>
                          <a href={githubItem.homepage} target="_blank" rel="noopener noreferrer">
                            <Icon type="global" />
                            <span>Demo</span>
                          </a>
                        </li>
                        : null
                    }
                  </ul>
                </StyledCard>
              </Col>
            )
          }
        </Row>
      </Layout>

    </>
  )
}
export default Repos

const StyledCard = styled(Card)`
  // Order matters
  .ant-card-head-title {
    text-align: center;
  }
  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    //top:-1px;
    //transform: scale(1.005, 1.005);
    transition: 0.2s ease-in;
  }
  margin: 24px 0;
  height: 320px;
  margin: 32px 0!important;
  // background: green;
`

const Input = styled.input`
  z-index: -3;
  position: absolute;
  left: -9999px;
`
const ConfirmCopy = styled.p`
  z-index:1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background: darkslategrey;
  color: white;
  width: 100%;
`