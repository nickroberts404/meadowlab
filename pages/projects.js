import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import projects from '../projects.js'
import ProjectCard from '../components/ProjectCard'

export default class Projects extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title="Projects"
          meta={[
            {"name": "description", "content": "A few of my past and ongoing projects."},
            {"name": "keywords", "content": "projects"},
            {"name": "og:title", "content": "meadowlab's Projects"},
            {"name": "og:url", "content": "http://meadowlab.io/projects"},
            {"name": "og:description", "content": "A few of my past and ongoing projects."},
          ]}
        />
        <div className="page-header">
          <h2 className="page-header-title">Projects</h2>
          <div className="page-header-description">A few of my past and ongoing projects.</div>
        </div>
        <div className="work-gallery">
          {projects.map(p => <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            projectLink={p.projectLink}
            pageLink={p.pageLink}
            gitLink={p.gitLink}
            icon={p.icon}
            />)
          }
        </div>
      </div>
    )
  }
}
