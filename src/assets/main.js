
const url = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLnvSG3nThWK-D1ZUp8Q-SKxU8J8Oqiysf&part=snippet&maxResults=8';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ea16ad6d09msh25d8c744e6e4ca4p1825fbjsnc2ae45edcc9a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


const content = null || document.getElementById('content');

async function fetchData(urlAPI){
	const response = await fetch(urlAPI, options);
	const result = await response.json();
	return result;
}

(async () => {
 try{
 const videos = await fetchData(url)
 let view=`
    ${videos.items.map(video=>`
    <a href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}" target="_blank">
      <div class="group relative cursor-pointer">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
         
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm  font-bold text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
      </a>
    `).join('')}
    
    `;
    content.innerHTML = view;
}
catch(error)
{console.log(error)}
}
)();