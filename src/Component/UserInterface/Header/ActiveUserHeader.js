import { Header, Icon, Segment } from 'semantic-ui-react'
import MenuRight from './MenuRight';
import MenuLeft from './MenuLeft';
import LoggedInMenu from './LoggedInMenu';

/**
 * 
 * @returns Parent Component: HeaderComponent
 * Child component:MenuRight
 * Child Component: MenueLeft 
 */
const ActiveUserHeader = () =>
{
    return (
         <div>
        <Segment clearing>
           <Header as='h2' floated='right'>
                 <LoggedInMenu />
            </Header>
            <Header as='h2' floated='left'>
               <MenuLeft />
            </Header>
        </Segment>

  </div>
    )
    
}

export default ActiveUserHeader;