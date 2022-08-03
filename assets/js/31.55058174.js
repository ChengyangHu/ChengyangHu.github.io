(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{518:function(r,a,t){"use strict";t.r(a);var v=t(28),_=Object(v.a)({},(function(){var r=this,a=r.$createElement,t=r._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[r._v("#")]),r._v(" 栈")]),r._v(" "),t("h2",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[r._v("#")]),r._v(" 基本概念")]),r._v(" "),t("p",[r._v("操作受限的线性表"),t("br"),r._v("\n栈顶"),t("br"),r._v("\n栈底"),t("br"),r._v("\n空栈"),t("br"),r._v("\n操作特性：后进先出（Last In First Out,LIFO）"),t("br"),r._v("\n卡特兰数：[1/(n+1)] C (n,2n)，n 个不同元素进栈，不同出栈排列个数")]),r._v(" "),t("h2",{attrs:{id:"基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[r._v("#")]),r._v(" 基本操作")]),r._v(" "),t("p",[r._v("图。。")]),r._v(" "),t("h2",{attrs:{id:"顺序存储结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序存储结构"}},[r._v("#")]),r._v(" 顺序存储结构")]),r._v(" "),t("p",[r._v("栈顶指针 s.top，初始值 - 1（0 则是规定指向栈顶元素的下一个存储单元）"),t("br"),r._v("\n进栈：不满，栈顶指针 + 1，再送值到栈顶元素"),t("br"),r._v("\n出栈：非空，取元素值，栈底指针 - 1"),t("br"),r._v("\n 判空：s.top == -1"),t("br"),r._v("\n 判满：s.top == MaxSize-1（数组）"),t("br"),r._v("\n栈长：s.top+1"),t("br"),r._v("\n 存在上溢")]),r._v(" "),t("h3",{attrs:{id:"基本操作实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本操作实现"}},[r._v("#")]),r._v(" 基本操作实现")]),r._v(" "),t("p",[r._v("初始化"),t("br"),r._v("\n判空"),t("br"),r._v("\n进栈"),t("br"),r._v("\n出栈"),t("br"),r._v("\n读栈顶元素"),t("br"),r._v(" "),t("strong",[r._v("注意栈顶指针初始值为 - 1/0，其影响 ++s.top 还是 s.top++ 以及其他")]),t("br"),r._v("\n ### 共享栈"),t("br"),r._v("\n两个顺序栈共享一维数组，两端栈底，栈顶双向奔赴。"),t("br"),r._v("\n判满：右栈顶与左栈顶差值为一"),t("br"),r._v("\n判空：左栈顶 - 1，右栈顶 MaxSize")]),r._v(" "),t("h2",{attrs:{id:"链式存储结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链式存储结构"}},[r._v("#")]),r._v(" 链式存储结构")]),r._v(" "),t("p",[r._v("便于结点插入、删除，限制链表操作位置即可实现链栈")]),r._v(" "),t("h1",{attrs:{id:"队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[r._v("#")]),r._v(" 队列")]),r._v(" "),t("h2",{attrs:{id:"基本概念-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念-2"}},[r._v("#")]),r._v(" 基本概念")]),r._v(" "),t("p",[r._v("操作受限的线性表"),t("br"),r._v("\n术语：入队（进队）、出队（离队）、队头（队首）、队尾、空队列"),t("br"),r._v("\n操作特性：先进先出（First In First Out,FIFO）")]),r._v(" "),t("h2",{attrs:{id:"基本操作-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本操作-2"}},[r._v("#")]),r._v(" 基本操作")]),r._v(" "),t("p",[r._v("图。。")]),r._v(" "),t("h2",{attrs:{id:"顺序存储结构-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序存储结构-2"}},[r._v("#")]),r._v(" 顺序存储结构")]),r._v(" "),t("h3",{attrs:{id:"顺序存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序存储"}},[r._v("#")]),r._v(" 顺序存储")]),r._v(" "),t("p",[r._v("头 front 指针指队头元素，尾指针 rear 指队尾元素的下一个位置"),t("br"),r._v("\n判空：队头队尾相等为 0"),t("br"),r._v("\n 进队：不满，先送值至队尾，队尾指针 + 1"),t("br"),r._v("\n 出队：不空，先取队头元素，队头指针 + 1"),t("br"),r._v("\n 注意 Q.rear == MaxSize 无法判满，可能出现上溢出，实际上还有内存空间")]),r._v(" "),t("h3",{attrs:{id:"循环队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环队列"}},[r._v("#")]),r._v(" 循环队列")]),r._v(" "),t("p",[r._v("逻辑上视顺序队列为环状，出队入队均为顺时针方向进 1")]),r._v(" "),t("h4",{attrs:{id:"队空-满"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#队空-满"}},[r._v("#")]),r._v(" 队空 / 满")]),r._v(" "),t("ol",[t("li",[r._v("牺牲一个单元区分，队头指针在队尾指针下一位置为队满\n"),t("ul",[t("li",[r._v("队满 (Q.rear+1)% MaxSize == Q.front")]),r._v(" "),t("li",[r._v("队空 Q.front == Q.rear")]),r._v(" "),t("li",[r._v("队中元素个数 (Q.rear-Q.front+MaxSize)% MaxSize")])])]),r._v(" "),t("li",[r._v("类型中增设表示元素个数的数据成员\n"),t("ul",[t("li",[r._v("队空 Q.size==0 队满 Q.size==MaxSize")])])]),r._v(" "),t("li",[r._v("类型中增设 tag 数据成员区分，tag==0 时，因删除导致 Q.front == Q.rear, 队空；等于 1 时，因插入导致，队满。")])]),r._v(" "),t("h4",{attrs:{id:"循环队列操作实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环队列操作实现"}},[r._v("#")]),r._v(" 循环队列操作实现")]),r._v(" "),t("p",[r._v("初始化"),t("br"),r._v("\n判空"),t("br"),r._v("\n入队"),t("br"),r._v("\n出队")]),r._v(" "),t("h2",{attrs:{id:"链式存储结构-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链式存储结构-2"}},[r._v("#")]),r._v(" 链式存储结构")]),r._v(" "),t("h3",{attrs:{id:"队列的链式存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#队列的链式存储"}},[r._v("#")]),r._v(" 队列的链式存储")]),r._v(" "),t("p",[r._v("同时带有队头和队尾指针的单链表，判空：二者均空"),t("br"),r._v("\n出队队头指针后移，若为最后一个结点，则令二者为空"),t("br"),r._v("\n通常设计为带头结点的单链表")]),r._v(" "),t("h3",{attrs:{id:"基本操作-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本操作-3"}},[r._v("#")]),r._v(" 基本操作")]),r._v(" "),t("p",[r._v("初始化"),t("br"),r._v("\n判空"),t("br"),r._v("\n入队"),t("br"),r._v("\n出队")]),r._v(" "),t("h3",{attrs:{id:"双端队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双端队列"}},[r._v("#")]),r._v(" 双端队列")]),r._v(" "),t("p",[r._v("两端都能进行操作的队列，左右分别为前端后端")])])}),[],!1,null,null,null);a.default=_.exports}}]);