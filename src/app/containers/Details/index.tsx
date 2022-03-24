import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { saga} from './saga';
import { key, detailsReducer } from './reducer';
import { selectDetails, selectLoading, selectError } from './selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { PageWrapper } from 'app/components/PageWrapper';

import './details.css'

export function Details() {
  useInjectReducer({ key: key, reducer: detailsReducer });
  useInjectSaga({ key: key, saga });

  const {id} = useParams<{id?:string}>();
  const details = useSelector(selectDetails);
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'DETAILS_FETCH_REQUESTED', payload: {id}})
  }, [dispatch]);

  return (
    <PageWrapper>
      <h1>Country Details</h1>
      {isLoading && <LoadingIndicator small />}
      {details?.length > 0 && !details[0].error_message ? (
        <List>
          {details.map((detail, idx) => (
            <div key={idx}>
              <p><strong>Name:</strong> <span className='details'>{detail.name}</span></p>
              <p><strong>Currency Code:</strong> <span className='details'>{detail.currency_code}</span></p>
            </div>
          ))}
        </List>
      ) : details[0]?.error_message ? <p><strong>Error:</strong> <span className='details'>{details[0].error_message}</span></p> : null}
    </PageWrapper>
  );
}

const List = styled.div``;
