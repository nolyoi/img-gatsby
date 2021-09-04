import { useState } from 'react';
import queryString from 'query-string';

const useParams = (location) => {
    const [params] = useState(queryString.parse(location.search))
    return params
}

export default useParams;