import React from 'react';
import { Space } from 'antd';
import { Project } from '../project/project.component'

export const Projects = props => {
  console.log(props)
  return (
    <div>
      <Space direction="vertical" style={{"width": "100%"}}>
        {props.projects.map((project, idx) => (
          console.log(idx, project),
          <Project key={`project-${idx}`} project={project} index={idx} />
        ))}
        <Project />
      </Space>
    </div>
  )
}