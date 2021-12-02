(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{467:function(e,t,a){"use strict";a.r(t);var r=a(22),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"custom-java-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-java-arguments"}},[e._v("#")]),e._v(" Custom Java arguments")]),e._v(" "),a("p",[e._v("If you were using Java arguments that optimize garbage collection or increase the memory, you can still use them in PojavLauncher by writing them to a file called "),a("code",[e._v("overrideargs.txt")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"before-writing-the-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-writing-the-file"}},[e._v("#")]),e._v(" Before writing the file")]),e._v(" "),a("p",[e._v("An update to PojavLauncher changed where it looked for the arguments file. If you're using on of the below versions, you'll need to substitute "),a("code",[e._v("/var/mobile/Documents/.pojavlauncher/")]),e._v(" with "),a("code",[e._v("/var/mobile/Documents/minecraft")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Any GitHub Actions build from "),a("em",[e._v("before")]),e._v(" commit "),a("a",{attrs:{href:"https://github.com/PojavLauncherTeam/PojavLauncher_iOS/commit/19cbac05b1a0eb17fc6eff57753df2e316c04cdd",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("19cbac0")]),a("OutboundLink")],1),e._v(" (before March 17, 2021).")]),e._v(" "),a("li",[e._v("Any version from the Releases page.")]),e._v(" "),a("li",[e._v("Any version from Procursus "),a("em",[e._v("before")]),e._v(" April 19, 2021.")]),e._v(" "),a("li",[e._v("Any version of "),a("code",[e._v("pojavlauncher")]),e._v(" from Doregon's Repository "),a("em",[e._v("before")]),e._v(" April 19, 2021.")])]),e._v(" "),a("h2",{attrs:{id:"setting-your-own-arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-your-own-arguments"}},[e._v("#")]),e._v(" Setting your own arguments")]),e._v(" "),a("p",[e._v("First, create the "),a("code",[e._v("/var/mobile/Documents/.pojavlauncher/overrideargs.txt")]),e._v(" file. Now you can get to messing with Java arguments. The way you enter them is with a dash and then the argument:")]),e._v(" "),a("p",[a("code",[e._v("-Xmx3G")])]),e._v(" "),a("p",[a("strong",[e._v("Not all arguments will work with PojavLauncher.")]),e._v(" This was brought to our attention on May 18, after someone tried using a set of arguments from the FeedTheBeast subreddit. Here's a set that reduces lag spikes (from the Android repository)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-XX:+DisableExplicitGC -XX:+UseNUMA -XX:MaxTenuringThreshold=15 -XX:MaxGCPauseMillis=30 -XX:GCPauseIntervalMillis=150 -XX:-UseGCOverheadLimit -XX:+UseBiasedLocking -XX:SurvivorRatio=8 -XX:TargetSurvivorRatio=90 -XX:MaxTenuringThreshold=15 -Dfml.ignorePatchDiscrepancies=true -Dfml.ignoreInvalidMinecraftCertificates=true -XX:+UseCompressedOops -XX:+OptimizeStringConcat -XX:ReservedCodeCacheSize=2048m -XX:+UseCodeCacheFlushing -XX:SoftRefLRUPolicyMSPerMB=2000 -XX:ParallelGCThreads=10\n")])])]),a("p",[e._v("If "),a("code",[e._v("latestlog.txt")]),e._v(" has a line said "),a("code",[e._v("An error occurred during the VM initialization")]),e._v(" and you're sure that the permissions for your files are correct, your arguments will not work.")]),e._v(" "),a("h2",{attrs:{id:"xms-and-xmx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xms-and-xmx"}},[e._v("#")]),e._v(" "),a("code",[e._v("-Xms")]),e._v(" and "),a("code",[e._v("-Xmx")])]),e._v(" "),a("p",[e._v("By default, PojavLauncher changes the "),a("code",[e._v("-Xms")]),e._v(" and "),a("code",[e._v("-Xmx")]),e._v(" values based on what iOS device is being used, to 25% of total RAM amount. The currently known values are at the bottom of this page.")]),e._v(" "),a("p",[e._v("To set the "),a("em",[e._v("minimum")]),e._v(" memory that PojavLauncher can use, add the "),a("code",[e._v("-Xms")]),e._v(" argument. This one accepts a number "),a("strong",[e._v("with a suffix")]),e._v(" of K (for kilobytes), M (for megabytes), or G (for gigabytes). We recommend using the M suffix to prevent issues with too little or too much memory. This argument requires the presence of the next argument to function correctly, and cannot be greater than it. An example is "),a("code",[e._v("-Xms1024M")]),e._v(", which means that when the game starts, it will allocate 1024 megabytes of memory.")]),e._v(" "),a("p",[e._v("To set the "),a("em",[e._v("maximum")]),e._v(" memory that PojavLauncher can use, add the "),a("code",[e._v("-Xmx")]),e._v(" argument. This one accepts a number "),a("strong",[e._v("with a suffix")]),e._v(" of K (for kilobytes), M (for megabytes), or G (for gigabytes). We recommend using the M suffix to prevent issues with too little or too much memory. This argument requires the presence of the previous argument to function correctly, and cannot be less than it. An example is "),a("code",[e._v("-Xmx1024M")]),e._v(", which means that when the game starts, it will be able to use up to 1024 megabytes of memory.")]),e._v(" "),a("p",[e._v("The tables below show what values PojavLauncher sets as the maximum memory that it can use. You can choose to go farther than these values with the "),a("code",[e._v("-Xmx")]),e._v(" argument, but be warned that iOS may kill the game more frequently (a workaround is explained on "),a("a",{attrs:{href:"overb0arding"}},[e._v("this page")]),e._v("). We recommend keeping the "),a("code",[e._v("-Xms")]),e._v(" value below the values listed here, because then the game may crash when starting.")]),e._v(" "),a("h3",{attrs:{id:"table-of-devices-and-memory-allocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-devices-and-memory-allocation"}},[e._v("#")]),e._v(" Table of devices and memory allocation")]),e._v(" "),a("p",[e._v("All values are estimates. The real values will be slightly lower. The latest iOS versions are here for reference.")]),e._v(" "),a("h4",{attrs:{id:"iphone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iphone"}},[e._v("#")]),e._v(" iPhone")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("iPhone model")]),e._v(" "),a("th",[e._v("Memory Allocation")]),e._v(" "),a("th",[e._v("Latest iOS")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("iPhone 5s, iPhone 6/6 Plus")]),e._v(" "),a("td",[e._v("256 megabytes")]),e._v(" "),a("td",[e._v("iOS 12.5.4")])]),e._v(" "),a("tr",[a("td",[e._v("iPhone 6s/6s Plus, iPhone SE (1st generation), iPhone 7, iPhone 8")]),e._v(" "),a("td",[e._v("512 megabytes")]),e._v(" "),a("td",[e._v("current")])]),e._v(" "),a("tr",[a("td",[e._v("iPhone 7 Plus, iPhone 8 Plus, iPhone X, iPhone XR, iPhone SE (2nd generation)")]),e._v(" "),a("td",[e._v("768 megabytes")]),e._v(" "),a("td",[e._v("current")])]),e._v(" "),a("tr",[a("td",[e._v("iPhone XS/XS Max, iPhone 11/11 Pro/11 Pro Max")]),e._v(" "),a("td",[e._v("1024 megabytes")]),e._v(" "),a("td",[e._v("current")])]),e._v(" "),a("tr",[a("td",[e._v("iPhone 12 mini/12/12 Pro/12 Pro Max")]),e._v(" "),a("td",[e._v("1536 megabytes")]),e._v(" "),a("td",[e._v("current")])])])]),e._v(" "),a("h4",{attrs:{id:"ipad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipad"}},[e._v("#")]),e._v(" iPad")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(' The iPad Pro 11" 1st gen and 12.9" 2nd gen can have either 4GB or 6GB of total memory. If your model has 1TB of storage, you will have 6GB. If not, you will have 4GB. The same concept applies to the iPad Pro 11” 3rd gen and 12.9” 5th gen: if your model has 1TB or higher, you have 16GB of total memory. If not, you have 8GB.')]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("iPad model")]),e._v(" "),a("th",[e._v("Memory Allocation")]),e._v(" "),a("th",[e._v("Latest iOS/iPadOS")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("iPad Air, iPad mini 2, iPad mini 3")]),e._v(" "),a("td",[e._v("256 megabytes")]),e._v(" "),a("td",[e._v("iOS 12.5.4")])]),e._v(" "),a("tr",[a("td",[e._v("iPad Air 2, iPad mini 4, iPad (5th generation), iPad Pro 9.7”")]),e._v(" "),a("td",[e._v("512 megabytes")]),e._v(" "),a("td",[e._v("current")])]),e._v(" "),a("tr",[a("td",[e._v("iPad Air 3, iPad mini 5, iPad (6th to 8th generation)")]),e._v(" "),a("td",[e._v("768 megabytes")]),e._v(" "),a("td",[e._v("current")])]),e._v(" "),a("tr",[a("td",[e._v("iPad Air 4, iPad Pro 10.5”, iPad Pro 12.9” (1st and 2nd generation)")]),e._v(" "),a("td",[e._v("1024 megabytes")]),e._v(" "),a("td",[e._v("current")])]),e._v(" "),a("tr",[a("td",[e._v('iPad Pro 11" 1st generation, iPad Pro 12.9” 3rd generation')]),e._v(" "),a("td",[e._v("1024 or 1536 megabytes")]),e._v(" "),a("td",[e._v("current")])]),e._v(" "),a("tr",[a("td",[e._v('iPad Pro 11" 2nd generation, iPad Pro 12.9” 4th generation')]),e._v(" "),a("td",[e._v("1536 megabytes")]),e._v(" "),a("td",[e._v("current")])]),e._v(" "),a("tr",[a("td",[e._v("iPad Pro 11” 3rd generation, iPad Pro 12.9” 5th generation")]),e._v(" "),a("td",[e._v("2048 or 4096 megabytes")]),e._v(" "),a("td",[e._v("current")])])])]),e._v(" "),a("h4",{attrs:{id:"ipod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipod"}},[e._v("#")]),e._v(" iPod")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("iPod model")]),e._v(" "),a("th",[e._v("Memory Allocation")]),e._v(" "),a("th",[e._v("Latest iOS")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("iPod touch 6")]),e._v(" "),a("td",[e._v("256 megabytes")]),e._v(" "),a("td",[e._v("iOS 12.5.4")])]),e._v(" "),a("tr",[a("td",[e._v("iPod touch 7")]),e._v(" "),a("td",[e._v("512 megabytes")]),e._v(" "),a("td",[e._v("current")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);