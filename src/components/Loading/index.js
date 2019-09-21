import React from 'react';

import { LoadingContent } from './styles';

export default function Loading() {
  return (
    <LoadingContent>
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </LoadingContent>
  );
}
