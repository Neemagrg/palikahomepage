import {useState} from "react";


const Home =()=>{


const categories=[
"प्राकृतिक",
"धार्मिक",
"ऐतिहासिक",
"सांस्कृतिक",
"अन्य"
];


const places=[

{
title:"बेतना सिमसार क्षेत्र",
category:"प्राकृतिक",
image:"https://placehold.co/600x400",
desc:"प्राकृतिक सौन्दर्यले भरिएको रमणीय स्थान।"
},


];



return(

<>


{/* HERO */}

<section className="
relative
h-120
bg-[#16458B]
flex
flex-col
items-center
text-white
pt-20
">


<p className="
text-yellow-300
font-semibold
">

नमस्ते! स्वागत छ

</p>



<h1 className="
text-5xl
font-bold
mt-5
">

बेलबारी नगरपालिका

</h1>



<p className="
mt-5
text-center
max-w-xl
text-lg
">

हाम्रो नगरपालिकाका उत्कृष्ट स्थलहरू पत्ता लगाउनुहोस्।
नेपालको सुन्दर यात्राको सुरुवात यहाँबाट सुरु हुन्छ।

</p>





{/* Search Box */}


<div className="
absolute
top-75
bg-white
text-black
w-130
rounded-xl
shadow-xl
p-8
">


<h2 className="
font-bold
text-xl
mb-5
">

तपाईं कहाँ जान चाहनुहुन्छ?

</h2>




<div className="
flex
">


<input

placeholder="स्थल खोज्नुहोस्..."

className="
border
w-full
p-3
rounded-l-lg
"

/>


<button className="
bg-[#123B75]
text-white
px-8
rounded-r-lg
">

खोज्नुहोस्

</button>


</div>




<div className="
flex
gap-3
mt-6
">


{
categories.map((item)=>(

<button

key={item}

className="
border
border-[#123B75]
text-[#123B75]
rounded-full
px-5
py-2
text-sm
">

{item}

</button>

))

}


</div>


</div>


</section>







{/* TOURISM SECTION */}


<section className="
bg-gray-100
px-20
pt-32
pb-20
">


<div className="
flex
justify-between
items-center
">


<div>

<h2 className="
text-4xl
font-bold
text-[#123B75]
">

अवश्य हेर्नुपर्ने स्थलहरु

</h2>



<p className="
mt-3
text-gray-600
">

बेलबारी नगरपालिकाका प्रसिद्ध पर्यटकीय स्थलहरू

</p>


</div>




<button className="
border
border-[#123B75]
text-[#123B75]
px-6
py-3
rounded-lg
">

सबै स्थलहरु हेर्नुहोस्

</button>


</div>






<div className="
grid
grid-cols-3
gap-8
mt-12
">


{

places.map(place=>(


<div

key={place.title}

className="
bg-white
rounded-xl
overflow-hidden
shadow-md
">


<img

src={place.image}

className="
h-64
w-full
object-cover
"

/>


<div className="p-6">


<span className="
border
rounded-full
px-4
py-1
text-sm
">

{place.category}

</span>



<h3 className="
text-xl
font-bold
text-[#123B75]
mt-5
">

{place.title}

</h3>


<p className="
text-gray-600
mt-3
">

{place.desc}

</p>



<button className="
text-[#123B75]
font-semibold
mt-5
">

थप जानुहोस् →

</button>


</div>


</div>


))


}


</div>


</section>


</>

)

}


export default Home;