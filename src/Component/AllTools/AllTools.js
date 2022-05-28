import useProduct from '../../hooks/useProduct';
import SeeAllTools from '../SeeAllTools/SeeAllTools';
const AllTools = () => {


    const [tools, setTools] = useProduct({});
    // if(isLoading){
    //     <Loading></Loading>
    // }

    return (
        <div className='bg-slate-100 py-24  px-10 '>

            <h1 className='text-4xl  font-bold  text-orange-400 text-center '>Our Tools</h1>
            <div class="flex flex-col w-full border-opacity-50">
                <div class="divider mx-60 "></div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
                {
                    tools?.map(tool => <SeeAllTools key={tool._id} tool={tool}></SeeAllTools>)
                }
            </div>

        </div>
    );
};
export default AllTools;