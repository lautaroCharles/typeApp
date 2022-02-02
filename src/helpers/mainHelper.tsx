export const handleMainFetch = async ({setFilter, setFetching}: any) => {
        try{
            setFilter('loading');
            const res = await fetch('https://nodemiddlewaree.herokuapp.com/', {
                mode: 'cors'
            })
            const data = await res.json();
            setFetching(data);
            setFilter('state')
        }
        catch(e){
            console.log(e)
        }
    }
    
export const handleSearchState = ({ setFilter}: any) => {
        return (e:any) => setFilter(e.target.value)
    }

export const AlphabeticalOrderName = ({ fetching }: any) => {
        return fetching.slice(0).sort((a:any, b:any) => {
            if(a.name < b.name){
                return -1
            }
            if(a.name > b.name){
                return 1
            }
            return 0;
        })
    }

export const FoundedOrderNewer = ({fetching}: any) => {
        return fetching.slice(0).sort((a:any, b:any) => {
            return b.founded - a.founded
        })
      }

export const FoundedOrderOlder = ({ fetching }: any) => {
return fetching.slice(0).sort((a:any, b:any) => {
    return a.founded - b.founded
})
}

export const IndustriesFilter = ({industries, fetching}: any) => {
    return fetching.filter((info:any) => info.industry === industries)
 }