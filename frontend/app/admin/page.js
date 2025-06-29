'use client'
import { Admin, Resource, ListGuesser } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

export default function AdminPage() {
  return (
    <Admin dataProvider={simpleRestProvider('/api')}>
      <Resource name="appointments" list={ListGuesser} />
    </Admin>
  )
}
