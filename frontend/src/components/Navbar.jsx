const Navbar = () => {

return(

<>

{/* Top Government Bar */}

<div className="
bg-[#123B75]
text-white
h-10
px-20
flex
items-center
justify-between
text-sm
">


<div className="flex gap-6">

<span>
☎ पर्यटन पोर्टल
</span>

<span>
🏛 नगरपालिका व्यवस्थापन प्रणाली
</span>

</div>


<div>
f &nbsp; t &nbsp; in
</div>


</div>




{/* Main Navbar */}

<nav className="
h-24
bg-white
shadow-md
px-20
flex
items-center
justify-between
">


<div className="
flex
items-center
gap-4
">


<img

src="https://placehold.co/80x80"

className="
rounded-full
w-16
h-16
"

/>



<div>

<h1 className="
text-xl
font-bold
text-[#123B75]
">

बेलबारी नगरपालिका

</h1>


<p className="text-gray-500">
पर्यटकीय क्षेत्र
</p>


</div>


</div>





<div className="
flex
gap-12
font-semibold
text-gray-700
">


<a className="
text-[#123B75]
border-b-4
border-[#123B75]
pb-8
">

गृहपृष्ठ

</a>


<a>
पर्यटकीय क्षेत्र
</a>


<a>
हाम्रो बारे
</a>


<a>
सम्पर्क
</a>


</div>





<button className="
bg-[#123B75]
text-white
px-8
py-3
rounded-lg
">

लगइन

</button>


</nav>


</>

)

}


export default Navbar;