import React from 'react';

import {Link} from 'react-router-dom';
//import {facts} from '../data/CatFacts';
import {Table,Container} from 'reactstrap';


export const ListFacts = ({limit,facts}) => {


        return (
            <Container>
            <Table>
               <thead><tr><th>Facts</th><th>Date</th><th/></tr></thead>
               <tbody>
                   {
                       facts.slice(0,limit).map(fact => (
                        <tr key={fact._id}>
                            <td>{fact.text}</td>
                            <td>{fact.createdAt}</td>
                            <td className="text-right">
                                <Link tag={Link} to={`/EditFact/${fact._id}`}>Edit</Link>
                            </td>
                        </tr>

                       ))
                   }
                   </tbody> 
            </Table>
            </Container>
        );


    }

