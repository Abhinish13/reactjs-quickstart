import React from 'react';

import {Link} from 'react-router-dom';
//import {facts} from '../data/CatFacts';
import {Table,Container} from 'reactstrap';


export const ListFacts = ({limit,facts}) => {


        return (
            <Container>
            <Table>
               <thead><tr><th>Facts</th><th>Date</th></tr></thead>
               <tbody>
                   {
                       facts.slice(0,limit).map(facts => (
                        <tr key={facts._id}>
                            <td>{facts.text}</td>
                            <td>{facts.createdAt}</td>
                            <td className="text-right">
                                <Link tag={Link} to={`/EditFacts/${facts._id}`}></Link>
                            </td>
                        </tr>

                       ))
                   }
                   </tbody> 
            </Table>
            </Container>
        );


    }

