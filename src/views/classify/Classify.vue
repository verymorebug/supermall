<template>
  <div class="wrapper" ref = "aaa">
    <ul class = "content">
      <li>分类信息1</li>
      <li>分类信息2</li>
      <li>分类信息3</li>
      <li>分类信息4</li>
      <li>分类信息5</li>
      <li>分类信息6</li>
      <li>分类信息7</li>
      <li>分类信息8</li>
      <li>分类信息9</li>
      <li>分类信息10</li>
      <li>分类信息11</li>
      <li>分类信息12</li>
      <li>分类信息13</li>
      <li>分类信息14</li>
      <li>分类信息15</li>
      <li>分类信息16</li>
      <li>分类信息17</li>
      <li>分类信息18</li>
      <li>分类信息19</li>
      <li>分类信息20</li>
      <li>分类信息21</li>
      <li>分类信息22</li>
      <li>分类信息23</li>
      <li>分类信息24</li>
      <li>分类信息25</li>
      <li>分类信息26</li>
      <li>分类信息27</li>
      <li>分类信息28</li>
      <li>分类信息29</li>
      <li>分类信息30</li>
      <li>分类信息31</li>
      <li>分类信息32</li>
      <li>分类信息33</li>
      <li>分类信息34</li>
      <li>分类信息35</li>
      <li>分类信息36</li>
      <li>分类信息37</li>
      <li>分类信息38</li>
      <li>分类信息39</li>
      <li>分类信息40</li>
      <li>分类信息41</li>
      <li>分类信息42</li>
      <li>分类信息43</li>
      <li>分类信息44</li>
      <li>分类信息45</li>
      <li>分类信息46</li>
      <li>分类信息47</li>
      <li>分类信息48</li>
      <li>分类信息49</li>
      <li>分类信息50</li>
      <li>分类信息51</li>
      <li>分类信息52</li>
      <li>分类信息53</li>
      <li>分类信息54</li>
      <li>分类信息55</li>
      <li>分类信息56</li>
      <li>分类信息57</li>
      <li>分类信息58</li>
      <li>分类信息59</li>
      <li>分类信息60</li>
      <li>分类信息61</li>
      <li>分类信息62</li>
      <li>分类信息63</li>
      <li>分类信息64</li>
      <li>分类信息65</li>
      <li>分类信息66</li>
      <li>分类信息67</li>
      <li>分类信息68</li>
      <li>分类信息69</li>
      <li>分类信息70</li>
      <li>分类信息71</li>
      <li>分类信息72</li>
      <li>分类信息73</li>
      <li>分类信息74</li>
      <li>分类信息75</li>
      <li>分类信息76</li>
      <li>分类信息77</li>
      <li>分类信息78</li>
      <li>分类信息79</li>
      <li>分类信息80</li>
      <li>分类信息81</li>
      <li>分类信息82</li>
      <li>分类信息83</li>
      <li>分类信息84</li>
      <li>分类信息85</li>
      <li>分类信息86</li>
      <li>分类信息87</li>
      <li>分类信息88</li>
      <li>分类信息89</li>
      <li>分类信息90</li>
      <li>分类信息91</li>
      <li>分类信息92</li>
      <li>分类信息93</li>
      <li>分类信息94</li>
      <li>分类信息95</li>
      <li>分类信息96</li>
      <li>分类信息97</li>
      <li>分类信息98</li>
      <li>分类信息99</li>
      <li>分类信息100</li>
    </ul>
  </div>
</template>

<script>

import BScroll from "better-scroll"

export default {
  name: "Classify",

  data(){

    return{

      scroll:null

    }

  },
  components:{

    BScroll

  },

  mounted() {

    this.scroll = new BScroll(document.querySelector(".wrapper"),{

      probeType:3,
      pullUpLoad:true

    })

    this.scroll.on("pullingUp",()=>{

      console.log("上拉加载");

    })

    this.scroll.on("scroll",(position)=>{

      console.log(position)

    })


  }

}
</script>

<style scoped>

  .wrapper{
    overflow: hidden;
    height: 180px;
    background: #ff8198;
    /*overflow: scroll;*/


  }

</style>
