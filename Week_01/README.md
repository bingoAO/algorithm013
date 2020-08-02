# 学习笔记

## 如何练习算法

1. 注意把控好时间，没有思路的时候不要死磕
2. 学习优秀的题解
3. 进行重复训练

    - 对做过的题目进行重复训练
    - 总结相似的题目进行汇总，关键代码整理

## 解题思路

1. 列举所有想到的解法
2. 分析暴力解法中可优化的地方，从下面几点入手
    - 找重复问题（如爬楼梯）
    - 从限制条件排除一些情况(如数组已排序等)
    - 空间换时间：升纬度（两数之和）

## 技巧积累

1. 快慢指针（环形列表）  
  <https://leetcode.com/problems/linked-list-cycle/>
2. 双指针，左右夹逼  
  <https://leetcode-cn.com/problems/container-with-most-water/>
3. 哨兵（柱形图）  
  <https://leetcode-cn.com/problems/largest-rectangle-in-histogram/>

## 数据结构

根据不同的场景选用不同的数据结构。

### 数组

1. 特点  

    - 存储空间连续，查询的时间复杂度为O(1)，
    - 插入和删除的时间复杂度为O(n):造成后面元素的挪位  

2. 注意点  

    在循环中修改了数组的元素或者长度造成的影响

### 链表

1. 特点  

    - 结构：{current:val,next:nextElement}，从头指针入口，通过next指针访问其他元素
    - 查询时间复杂度O(n)，插入删除的时间复杂度O(1)

### 跳表

1. 升纬度，空间换时间，查询时间复杂度为O(log n)

### 栈

1. 特点：先进后出  
2. 应用：
    - 最近相关性类型的问题  
    <https://leetcode-cn.com/problems/valid-parentheses/>
    - 单调栈,存储执行时候的信息  
      - 单调递增的栈可以找到左边第一个比当前出栈元素小（包含等于）的元素
      - 到左边第一个比当前出栈元素大（包含等于）的元素  
      <https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/bao-li-jie-fa-zhan-by-liweiwei1419/>

### 队列

特点：先进先出

### 双项队列

应用：滑动窗口问题？

## 其他

每次保存最小信息的时候，保存当前层的最小（有点快照的感觉）  
<https://leetcode-cn.com/problems/min-stack/>

滑动窗口最大值
<https://www.bilibili.com/video/BV1Q741147PF/?spm_id_from=333.788.b_7265636f5f6c697374.2>
