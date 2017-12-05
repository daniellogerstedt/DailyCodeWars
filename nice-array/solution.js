let isNice=a=>a.length? a.every(v=>a.includes(v+1) || a.includes(v-1)? true : false) : false
