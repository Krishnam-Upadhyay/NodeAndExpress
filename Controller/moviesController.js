//Router Handler functions

const fs = require('fs');
const movies = JSON.parse(fs.readFileSync('./Data/movies.json','utf-8'));


//creating param middleware
exports.checkId =  (req,res,next,value)=>{
    const movieToUpdate = movies.find((m)=> m.id === value*1);

    if(!movieToUpdate){
        return res.status(404).json({
            status:'fail',
            message:'No Movie to update'
        });

        
}
next();
}

exports.validateBody = (req,res,next)=>{
    if(!req.body.name || !req.body.realeasedate){
        res.status(404).json({
            status:'fail',
            message:'not a valid movie data'  
        })
    }
    next();
}

exports.getAllMovies = (req,res)=>{
    res.status(200).json({
        status:"success",
        requestedAt:req.requestedAt,
        count:movies.length,
        movies:movies
    });
};
exports.getMovie = (req,res)=>{
    const id  = req.params.id*1;
    const movie = movies.find((m)=>{
        let movie = m.id ===id;
        return movie;
    })

    if(!movie){
        res.status(404).json({
            status:"fail",
            message:"unable to find movie"
        })
    }

    res.status(200).json({
        status:"success",
        data:{
            movie:movie
        }
    });  
}
exports.postMovie = (req,res)=>{
    const newid = movies[movies.length-1].id+1;
    const newMovie = Object.assign({id:newid},req.body);
    
    movies.push(newMovie);
    fs.writeFile('./Data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(201).json({
            status:"success",
           data:{
            movie:newMovie
           }
        })
    })

    
}
exports.patchMovie = (req,res)=>{
    let id = req.params.id*1;
    const movieToUpdate = movies.find((m)=>{
        return m.id ===id;
    });

    if(!movieToUpdate){
        res.status(404).json({
            status:'fail',
            message:'No Movie to update'
        })
    }else{ 
        let index = movies.indexOf(movieToUpdate);

        Object.assign(movieToUpdate,req.body);
        movies[index]= movieToUpdate;
    
        fs.writeFile('./Data/movies.json',JSON.stringify(movies),(err)=>{
            
            res.status(200).json({
                status:'success',
                data:{
                    movie:movieToUpdate
                }
            })
        })}

   
   

}
exports.deleteMovie = (req,res)=>{
    let id = req.params.id*1;
    let movieToDelet = movies.find((m)=>{
        return m.id ===id;
    });
    if(!movieToDelet){
        res.status(404).json({
            status:"fail",
            message :"No movie  to delete"
            

        })
    }else{
        let index = movies.indexOf(movieToDelet);
        movies.splice(index,1);
        fs.writeFile("./Data/movies.json",JSON.stringify(movies),(err)=>{
            res.status(200).json({
                status:"success",
                message:null
            })

        })
    
    }
   

}