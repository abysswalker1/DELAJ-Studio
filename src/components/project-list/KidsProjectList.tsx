import ProjectList from '@/components/project-list/ProjectList';
import { ProjectItem } from '@/types';
import KidsWallpapper from '../kids-wallpapper/KidsWallpapper';

const projects: ProjectItem[] = [
  {
    id : 1,
    preview: '/images/data/kids-data/1.png',
  },
  {
    id : 2,
    preview: '/images/data/kids-data/2.png',
  },
  {
    id : 3,
    preview: '/images/data/kids-data/3.png',
  },
  {
    id : 4,
    preview: '/images/data/kids-data/4.png',
  },
  {
    id : 5,
    preview: '/images/data/kids-data/5.png',
  },
  {
    id : 1,
    preview: '/images/data/kids-data/6.png',
  },
  {
    id : 2,
    preview: '/images/data/kids-data/7.png',
  },
  {
    id : 3,
    preview: '/images/data/kids-data/8.png',
  },
  {
    id : 4,
    preview: '/images/data/kids-data/9.png',
  },
  {
    id : 5,
    preview: '/images/data/kids-data/10.png',
  },
  {
    id : 1,
    preview: '/images/data/kids-data/11.png',
  },
  {
    id : 2,
    preview: '/images/data/kids-data/12.png',
  },
  {
    id : 3,
    preview: '/images/data/kids-data/13.png',
  },
  {
    id : 5,
    preview: '/images/data/kids-data/12.png',
  },
  {
    id : 5,
    preview: '/images/data/kids-data/15.png',
  },
  {
    id : 5,
    preview: '/images/data/kids-data/13.png',
  },
  {
    id : 5,
    preview: '/images/data/kids-data/11.png',
  },
]

const KidsProjectList = () => {
  
  return (
    <ProjectList className="for-kids__projects" data={projects} Wallpapper={KidsWallpapper}/>
  );
};

export default KidsProjectList;