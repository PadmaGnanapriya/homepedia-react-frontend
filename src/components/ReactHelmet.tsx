import React, {PropsWithChildren} from 'react';
import {Helmet} from "react-helmet";
import {BASE_URL} from '../constants/RoutePaths';

type ReactHelmetProps = {
  title: string
  description: string
  canonicalRoute?: string
}

const ReactHelmet: React.FC<ReactHelmetProps> = (props: PropsWithChildren<ReactHelmetProps>) => {
  const {title, description, canonicalRoute} = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}/>
      {canonicalRoute && <link rel='canonical' href={BASE_URL + canonicalRoute}/>}
    </Helmet>
  )
};

export default ReactHelmet;
