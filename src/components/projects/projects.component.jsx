import React from 'react';
import { Space } from 'antd';
import { Project } from '../project/project.component'

export const Projects = props => {
  return (
    <div>
      <Space direction="vertical" style={{"width": "100%"}}>
        {props.projects.map((project, idx) => (
          <Project key={`project-${idx}`} project={project} index={idx} projectStatusChanger={props.projectStatusChanger}/>
        ))}
      </Space>
    </div>
  )
}