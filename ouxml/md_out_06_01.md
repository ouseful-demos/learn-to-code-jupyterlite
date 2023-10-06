---
jupyter:
  jupytext:
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.11.4
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
---

# 1 Joining left, right and centre


Let’s take stock for a moment. There’s the original, unchanged table (with full country names) about the life expectancy:

``In []:``

`life`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country name</th>
<th>Life expectancy (years)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">75</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">Russia</td>
<td class="highlight_" rowspan="" colspan="">71</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">United States</td>
<td class="highlight_" rowspan="" colspan="">79</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">India</td>
<td class="highlight_" rowspan="" colspan="">66</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">United Kingdom</td>
<td class="highlight_" rowspan="" colspan="">81</td>
</tr>
</tbody>
</table>

… and a table with the GDP in millions of pounds and also full country names.

``In []:``

`gdp`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country name</th>
<th>GDP (£m)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">United Kingdom</td>
<td class="highlight_" rowspan="" colspan="">1711727</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">United States</td>
<td class="highlight_" rowspan="" colspan="">10716029</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">5905202</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">1435148</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">233937</td>
</tr>
</tbody>
</table>

Both tables have a common column with a common name (‘Country name’). I can __join__ the two tables on that common column, using the ``merge()`` function. Merging basically puts all columns of the two tables together, without duplicating the common column, and joins any rows that have the same value in the common column.

There are four possible ways of joining, depending on which rows I want to include in the resulting table. If I want to include only those countries appearing in the GDP table, I call the ``merge()`` function like so:

``In []:``

`merge(gdp, life, on='Country name', how='left')`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country name</th>
<th>GDP (£m)</th>
<th>Life expectancy (years)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">United Kingdom</td>
<td class="highlight_" rowspan="" colspan="">1711727</td>
<td class="highlight_" rowspan="" colspan="">81</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">United States</td>
<td class="highlight_" rowspan="" colspan="">10716029</td>
<td class="highlight_" rowspan="" colspan="">79</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">5905202</td>
<td class="highlight_" rowspan="" colspan="">75</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">1435148</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">233937</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
</tr>
</tbody>
</table>

The first two arguments are the tables to be merged, with the first table being called the ‘left’ table and the second being the ‘right’ table. The ``on`` argument is the name of the common column, i.e. both tables must have a column with that name. The ``how`` argument states I want a __left join__ , i.e. the resulting rows are dictated by the left (GDP) table. You can easily see that India and Russia, which appear only in the right (expectancy) table, don’t show up in the result. You can also see that Brazil and South Africa, which appear only in the left table, have an undefined life expectancy. (Remember that ‘NaN’ stands for ‘not a number.)

A __right join__ will instead take the rows from the right table, and add the columns of the left table. Therefore, countries not appearing in the left table will have undefined values for the left table’s columns:

``In []:``

`merge(gdp, life, on='Country name', how='right')`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country name</th>
<th>GDP (£m)</th>
<th>Life expectancy (years)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">United Kingdom</td>
<td class="highlight_" rowspan="" colspan="">1711727</td>
<td class="highlight_" rowspan="" colspan="">81</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">United States</td>
<td class="highlight_" rowspan="" colspan="">10716029</td>
<td class="highlight_" rowspan="" colspan="">79</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">5905202</td>
<td class="highlight_" rowspan="" colspan="">75</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Russia</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
<td class="highlight_" rowspan="" colspan="">71</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">India</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
<td class="highlight_" rowspan="" colspan="">66</td>
</tr>
</tbody>
</table>

The third possibility is an __outer join__ which takes all countries, i.e. whether they are in the left or right table. The result has all the rows of the left and right joins:

``In []:``

`merge(gdp, life, on='Country name', how='outer')`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country name</th>
<th>GDP (£m)</th>
<th>Life expectancy (years)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">United Kingdom</td>
<td class="highlight_" rowspan="" colspan="">1711727</td>
<td class="highlight_" rowspan="" colspan="">81</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">United States</td>
<td class="highlight_" rowspan="" colspan="">10716029</td>
<td class="highlight_" rowspan="" colspan="">79</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">5905202</td>
<td class="highlight_" rowspan="" colspan="">75</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">1435148</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">233937</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__5__</td>
<td class="highlight_" rowspan="" colspan="">Russia</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
<td class="highlight_" rowspan="" colspan="">71</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__6__</td>
<td class="highlight_" rowspan="" colspan="">India</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
<td class="highlight_" rowspan="" colspan="">66</td>
</tr>
</tbody>
</table>

The last possibility is an __inner join__ which takes only those countries common to both tables, i.e. for which I know the GDP *and* the life expectancy. That’s the join I want, to avoid any undefined values:

``In []:``

`
gdpVsLife = merge(gdp, life, on='Country name', how='inner')
`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country name</th>
<th>GDP (£m)</th>
<th>Life expectancy (years)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">United Kingdom</td>
<td class="highlight_" rowspan="" colspan="">1711727</td>
<td class="highlight_" rowspan="" colspan="">81</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">United States</td>
<td class="highlight_" rowspan="" colspan="">10716029</td>
<td class="highlight_" rowspan="" colspan="">79</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">5905202</td>
<td class="highlight_" rowspan="" colspan="">75</td>
</tr>
</tbody>
</table>

Now it’s just a matter of applying the data transformation and combination techniques seen so far to the real data from the World Bank.

<!-- #region tags=["style-activity"] -->
### Exercise 5 Joining left, right and centre


#### Question

Put your learning into practice by completing Exercise 5 in the Exercise notebook 3.

Remember to run the existing code in the notebook before you start the exercise. When you’ve completed the exercise, save the notebook.

<!-- #endregion -->


## 1.1 Constant variables


You may have noticed that the same column names appear over and over in the code.

If, someday, I decide one of the new columns should be called ‘GDP (million GBP)’ instead of ‘GDP (£m)’ to make clear which currency is meant (because various countries use the pound symbol), I need to change the string in every line of code it occurs.


![An abstract image of different coloured vertical strips with a column of numbers through each.](./ou_futurelearn_learn_to_code_fig_1053.jpg)


__Figure 1__


Laziness is the mother of invention. If I assign the string to a variable and then use the variable everywhere instead of the string, whenever I wish to change the string, I only have to edit one line of code, where it’s assigned to the variable. A second advantage of using names instead of values is that I can use the name completion facility of Jupyter notebooks by pressing ‘TAB’. Writing code becomes much faster…

``In[]:``


```python

gdpInGbp = 'GDP (million GBP)'
gdpInUsd = 'GDP (US$)'
country = 'Country name'
gdp[gdpInGbp] = gdp[gdpInUsd].apply(usdToGbp)
headings = [country, gdpInGbp]
gdp = gdp[headings]
```


Such variables are meant to be assigned once. They are called __constants__ , because their value never changes. However, if someone else takes my code and wishes to adapt and extend it, they may not realise those variables are supposed to remain constant. Even I may forget it and try to assign a new value further down in the code! To help prevent such slip-ups the Python convention is to write names of constants in uppercase letters, with words separated by underscores. Thus, any further assignment to a variable in uppercase will ring an alarm bell (in your head, the computer remains silent).

``In[]:``


```python

GDP_GBP = 'GDP (million GBP)'
GDP_USD = 'GDP (US$)'
COUNTRY = 'Country name'
gdp[GDP_GBP] = gdp[GDP_USD].apply(usdToGbp)
headings = [COUNTRY, GDP_GBP]
gdp = gdp[headings]
```


Using constants is not just a matter of laziness. There are various advantages. First, constants stand out in the code.

Second, when making changes to the repeated values throughout the code, it’s easy to miss an occurrence. Using constants means the code is always consistent throughout.

Third, the name of the constant can help clarify what the value means. For example, instead of using the number 1995 throughout the code, define a constant that makes clear whether it’s a year, the cubic centimetres of a car engine or something else.

To sum up, using constants makes the code clearer, easier to change, and less prone to silly (but hard to find) mistakes due to inconsistent values.

Any value can be defined as a constant, whether it’s a string, a number or even a dataframe. For example, you could store the data you have loaded from the file into a constant, as a reminder to not change the original data. In the rest of the week, I’ll use constants mainly for the column names.

<!-- #region tags=["style-activity"] -->
### Exercise 6 Constants


#### Question

To practise using constants, rewrite your exercises in the Exercise notebook 3 using them.

<!-- #endregion -->


## 1.2 Getting real


Having tried out the data transformations and combination on small tables, I feel confident about using the full data from the World Bank, which I pointed you to in Life expectancy project.

Open a new browser window and go to the World Bank’s [data page](http://data.worldbank.org/). Type ‘GDP’ (without the quote marks) in the ‘Find an indicator’ box in the centre of the page and select ‘GDP current US$’. Click ‘Go’. This will take you to the data page you looked at earlier. Look at the top of your browser window. You will notice the URL is [http://data.worldbank.org/indicator/NY.GDP.MKTP.CD](http://data.worldbank.org/indicator/NY.GDP.MKTP.CD). Every World Bank dataset is for an indicator (in this case GDP in current dollars) with a unique name (in this case NY.GDP.MKTP.CD).

Knowing the indicator name, it’s a doddle to get the data directly into a dataframe, by using the ``download()`` function of the ``wb`` (World Bank) module, instead of first downloading a CSV or Excel file and then loading it into a dataframe. (Note that CoCalc’s free plan doesn’t allow connecting to other sites, so if you are using CoCalc you’ll need to download the data as a CSV or Excel file from the World Bank and upload it to CoCalc.)

Here’s the code to get the 2013 GDP values for all countries. It may take a little while for the code to fetch the data.

``In []:``


```python

from pandas.io.wb import download 
YEAR = 2013
GDP_INDICATOR = 'NY.GDP.MKTP.CD'
data = download(indicator=GDP_INDICATOR, country='all',
              start=YEAR, end=YEAR)
data.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th></th>
<th>NY.GDP.MKTP.CD</th>
</tr>
<tr>
<th>__country__</th>
<th>year</th>
<th></th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__Arab World__</td>
<td class="highlight_" rowspan="" colspan="">__2013__</td>
<td class="highlight_" rowspan="" colspan="">2.843483e+12</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__Caribbean small states__</td>
<td class="highlight_" rowspan="" colspan="">__2013__</td>
<td class="highlight_" rowspan="" colspan="">6.680344e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__Central Europe and the Baltics__</td>
<td class="highlight_" rowspan="" colspan="">__2013__</td>
<td class="highlight_" rowspan="" colspan="">1.418166e+12</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__East Asia &amp; Pacific (all income levels)__</td>
<td class="highlight_" rowspan="" colspan="">__2013__</td>
<td class="highlight_" rowspan="" colspan="">2.080794e+13</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__East Asia &amp; Pacific (developing only)__</td>
<td class="highlight_" rowspan="" colspan="">__2013__</td>
<td class="highlight_" rowspan="" colspan="">1.168563e+13</td>
</tr>
</tbody>
</table>

This table definitely has an odd shape. The three columns don’t have their headings side by side, and the row numbering (0, 1, 2, etc) is missing. That’s because the first two ‘columns’ are in fact the dataframe index. You saw a similar table in [Changing a dataframe’s index,](https://www.open.edu/openlearn/mod/oucontent/olink.php?id=83250&amp;targetdoc=Week+4%3A+Cleaning+up+our+act+Part+2&amp;targetptr=2.1) when the index of the weather dataframe was set to be the ‘GMT’ column, with values of type ``datetime64``. There’s a dataframe method to do the inverse, i.e. to transform the row names into column values and thereby reinstate the default dataframe index.

``In []:``


```python

gdp = data.reset_index()
gdp.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>year</th>
<th>NY.GDP.MKTP.CD</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">Arab World</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">2.843483e+12</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">Caribbean small states</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">6.680344e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">Central Europe and the Baltics</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">1.418166e+12</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">East Asia &amp; Pacific (all income levels)</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">2.080794e+13</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">East Asia &amp; Pacific (developing only)</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">1.168563e+13</td>
</tr>
</tbody>
</table>

I repeat the whole process for the life expectancy:

* search for ‘life expectancy’ on the World Bank site

* choose the ‘total’ dataset, which includes both female and male inhabitants

* note down its indicator (SP.DYN.LE00.IN)

* use it to get the data

* reset the dataframe index.

``In []:``


```python

LIFE_INDICATOR = 'SP.DYN.LE00.IN'
data = download(indicator=LIFE_INDICATOR, country='all',
              start=YEAR, end=YEAR)
life = data.reset_index()
life.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>year</th>
<th>SP.DYN.LE00.IN</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">Arab World</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">70.086392</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">Caribbean small states</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">71.966306</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">Central Europe and the Baltics</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">76.127583</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">East Asia &amp; Pacific (all income levels)</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">74.893439</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">East Asia &amp; Pacific (developing only)</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">73.981255</td>
</tr>
</tbody>
</table>

By defining the year as a constant, it’s very quick to change the code to load both datasets for any other year. If you wish to get GDP data for an earlier year than for life expectancy, then you need to define a second constant.

<!-- #region tags=["style-activity"] -->
### Exercise 7 Getting real


#### Question

The approach described above requires an internet connection to download the data directly from the World Bank. That may require some time, or sometimes not even work if the connection fails. Moreover, the World Bank sometimes changes its data format, which could break the code in the rest of this week.

Therefore, the Exercise notebook 3 loads instead the GDP and life expectancy data from files WB GDP 2013.csv and WB LE 2013.csv and Exercise 7 uses the file WB POP 2013.csv , which you should add to your disk folder or CoCalc project. All files are in the normal tabular format and need no resetting of the indices.

<!-- #endregion -->


## 1.3 Cleaning up


You may have noticed that the initial rows are not about countries, but groups of countries. Such aggregated values need to be removed, because we’re only interested in individual countries.

The expression ``frame[m:n],`` with ``n`` an integer bigger than ``m`` , represents the ‘sub-table’ from row ``m`` to row ``n-1``. In other words, it is a slice of frame with exactly ``n`` minus ``m`` rows. The expression is equivalent to the more convoluted expression ``frame.head(n).tail(n-m)``.

``In []:``

`gdp[0:3]`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>year</th>
<th>NY.GDP.MKTP.CD</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">Arab World</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">2.843483e+12</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">Caribbean small states</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">6.680344e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">Central Europe and the Baltics</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">1.418166e+12</td>
</tr>
</tbody>
</table>

To slice all rows from ``m`` onwards, you don’t have to count how many rows there are beforehand, just omit ``n``.

``In []:``

`gdp[240:]`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>year</th>
<th>NY.GDP.MKTP.CD</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__240__</td>
<td class="highlight_" rowspan="" colspan="">Uzbekistan</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">5.679566e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__241__</td>
<td class="highlight_" rowspan="" colspan="">Vanuatu</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">8.017876e+08</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__242__</td>
<td class="highlight_" rowspan="" colspan="">Venezuela, RB</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">3.713366e+11</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__243__</td>
<td class="highlight_" rowspan="" colspan="">Vietnam</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">1.712220e+11</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__244__</td>
<td class="highlight_" rowspan="" colspan="">Virgin Islands (U.S.)</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__245__</td>
<td class="highlight_" rowspan="" colspan="">West Bank and Gaza</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">1.247600e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__246__</td>
<td class="highlight_" rowspan="" colspan="">Yemen, Rep.</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">3.595450e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__247__</td>
<td class="highlight_" rowspan="" colspan="">Zambia</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">2.682081e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__248__</td>
<td class="highlight_" rowspan="" colspan="">Zimbabwe</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">1.349023e+10</td>
</tr>
</tbody>
</table>

By trying out ``head(m)`` for different values of ``m`` , I find that the list of individual countries starts in row number 34, with Afghanistan. Hence, I slice from row 34 onwards, and that’s my new dataframe.

``In []:``


```python

gdp = gdp[34:]
gdp.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>year</th>
<th>NY.GDP.MKTP.CD</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__34__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">2.031088e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__35__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">1.291667e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__36__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">2.101834e+11</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__37__</td>
<td class="highlight_" rowspan="" colspan="">American Samoa</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">NaN</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__38__</td>
<td class="highlight_" rowspan="" colspan="">Andorra</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">3.249101e+09</td>
</tr>
</tbody>
</table>

Unsurprisingly, there is missing data, so I remove those rows, as shown in [Missing values](https://www.open.edu/openlearn/mod/oucontent/olink.php?id=83250&amp;targetdoc=Week+4%3A+Cleaning+up+our+act+Part+2&amp;targetptr=1.3) in Week 4.

``In []:``


```python

gdp = gdp.dropna()
gdp.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>year</th>
<th>NY.GDP.MKTP.CD</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__34__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">2.031088e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__35__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">1.291667e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__36__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">2.101834e+11</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__38__</td>
<td class="highlight_" rowspan="" colspan="">Andorra</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">3.249101e+09</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__39__</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">2013</td>
<td class="highlight_" rowspan="" colspan="">1.241632e+11</td>
</tr>
</tbody>
</table>

Finally, I drop the irrelevant year column.

``In []:``


```python

COUNTRY = 'country'
headings = [COUNTRY, GDP_INDICATOR]
gdp = gdp[headings]
gdp.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>NY.GDP.MKTP.CD</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__34__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">2.031088e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__35__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">1.291667e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__36__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">2.101834e+11</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__38__</td>
<td class="highlight_" rowspan="" colspan="">Andorra</td>
<td class="highlight_" rowspan="" colspan="">3.249101e+09</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__39__</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">1.241632e+11</td>
</tr>
</tbody>
</table>

And now I repeat the whole cleaning process for the life expectancy table.

``In []:``


```python

headings = [COUNTRY, LIFE_INDICATOR]
life = life[34:].dropna()[headings]
life.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>SP.DYN.LE00.IN</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__34__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">60.931415</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__35__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">77.537244</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__36__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">71.009659</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__39__</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">51.866171</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__40__</td>
<td class="highlight_" rowspan="" colspan="">Antigua and Barbuda</td>
<td class="highlight_" rowspan="" colspan="">75.829293</td>
</tr>
</tbody>
</table>

Note how a single line of code can chain a row slice, a method call and a column slice, because each takes a dataframe and returns a dataframe.

<!-- #region tags=["style-activity"] -->
### Exercise 8 Cleaning up


#### Question

Clean up the population data from Exercise 7, in Exercise 8 in the exercise notebook 3.

<!-- #endregion -->


## 1.4 Joining and transforming


With the little tables, I first transformed the columns and then joined the tables.


![An image of a bride and groom holding hands with the minister between them in the background](./ou_futurelearn_learn_to_code_fig_1054.jpg)


__Figure 2__


As you may be starting to realise, there’s often more than one way to do it. Just for illustration, I’ll do the other way round for the big tables. Here are the tables, as a reminder.

``In []:``

`life.head()`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>SP.DYN.LE00.IN</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__34__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">60.931415</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__35__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">77.537244</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__36__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">71.009659</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__39__</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">51.866171</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__40__</td>
<td class="highlight_" rowspan="" colspan="">Antigua and Barbuda</td>
<td class="highlight_" rowspan="" colspan="">75.829293</td>
</tr>
</tbody>
</table>

``In []:``

`gdp.head()`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>NY.GDP.MKTP.CD</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__34__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">2.031088e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__35__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">1.291667e+10</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__36__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">2.101834e+11</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__38__</td>
<td class="highlight_" rowspan="" colspan="">Andorra</td>
<td class="highlight_" rowspan="" colspan="">3.249101e+09</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__39__</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">1.241632e+11</td>
</tr>
</tbody>
</table>

First, an inner join on the common column to combine rows where the common column value appears in both tables.

``In []:``


```python


gdpVsLife = merge(gdp, life, on='country', how='inner')

gdpVsLife.head()
```


``Out []:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>NY.GDP.MKTP.CD</th>
<th>SP.DYN.LE00.IN</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">2.031088e+10</td>
<td class="highlight_" rowspan="" colspan="">60.931415</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">1.291667e+10</td>
<td class="highlight_" rowspan="" colspan="">77.537244</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">2.101834e+11</td>
<td class="highlight_" rowspan="" colspan="">71.009659</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">1.241632e+11</td>
<td class="highlight_" rowspan="" colspan="">51.866171</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">Antigua and Barbuda</td>
<td class="highlight_" rowspan="" colspan="">1.200588e+09</td>
<td class="highlight_" rowspan="" colspan="">75.829293</td>
</tr>
</tbody>
</table>

Second, the dollars are converted to millions of pounds.

``In []:``


```python

GDP = 'GDP (£m)'
column = gdpVsLife[GDP_INDICATOR]

gdpVsLife[GDP] = column.apply(usdToGbp).apply(roundToMillions)

gdpVsLife.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>NY.GDP.MKTP.CD</th>
<th>SP.DYN.LE00.IN</th>
<th>GDP (£m)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">2.031088e+10</td>
<td class="highlight_" rowspan="" colspan="">60.931415</td>
<td class="highlight_" rowspan="" colspan="">12980</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">1.291667e+10</td>
<td class="highlight_" rowspan="" colspan="">77.537244</td>
<td class="highlight_" rowspan="" colspan="">8255</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">2.101834e+11</td>
<td class="highlight_" rowspan="" colspan="">71.009659</td>
<td class="highlight_" rowspan="" colspan="">134322</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">1.241632e+11</td>
<td class="highlight_" rowspan="" colspan="">51.866171</td>
<td class="highlight_" rowspan="" colspan="">79349</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">Antigua and Barbuda</td>
<td class="highlight_" rowspan="" colspan="">1.200588e+09</td>
<td class="highlight_" rowspan="" colspan="">75.829293</td>
<td class="highlight_" rowspan="" colspan="">767</td>
</tr>
</tbody>
</table>

Third, the life expectancy is rounded to the nearest integer, with a by now familiar function.

``In []:``


```python

LIFE = 'Life expectancy (years)'

gdpVsLife[LIFE] = gdpVsLife[LIFE_INDICATOR].apply(round)

gdpVsLife.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>NY.GDP.MKTP.CD</th>
<th>SP.DYN.LE00.IN</th>
<th>GDP (£m)</th>
<th>Life expectancy (years)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">2.031088e+10</td>
<td class="highlight_" rowspan="" colspan="">60.931415</td>
<td class="highlight_" rowspan="" colspan="">12980</td>
<td class="highlight_" rowspan="" colspan="">61</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">1.291667e+10</td>
<td class="highlight_" rowspan="" colspan="">77.537244</td>
<td class="highlight_" rowspan="" colspan="">8255</td>
<td class="highlight_" rowspan="" colspan="">78</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">2.101834e+11</td>
<td class="highlight_" rowspan="" colspan="">71.009659</td>
<td class="highlight_" rowspan="" colspan="">134322</td>
<td class="highlight_" rowspan="" colspan="">71</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">1.241632e+11</td>
<td class="highlight_" rowspan="" colspan="">51.866171</td>
<td class="highlight_" rowspan="" colspan="">79349</td>
<td class="highlight_" rowspan="" colspan="">52</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">Antigua and Barbuda</td>
<td class="highlight_" rowspan="" colspan="">1.200588e+09</td>
<td class="highlight_" rowspan="" colspan="">75.829293</td>
<td class="highlight_" rowspan="" colspan="">767</td>
<td class="highlight_" rowspan="" colspan="">76</td>
</tr>
</tbody>
</table>

Lastly, the original columns are discarded.

``In []:``


```python

headings = [COUNTRY, GDP, LIFE]
gdpVsLife = gdpVsLife[headings]
gdpVsLife.head()
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>country</th>
<th>GDP (£m)</th>
<th>Life expectancy (years)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">Afghanistan</td>
<td class="highlight_" rowspan="" colspan="">12980</td>
<td class="highlight_" rowspan="" colspan="">61</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">Albania</td>
<td class="highlight_" rowspan="" colspan="">8255</td>
<td class="highlight_" rowspan="" colspan="">78</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">Algeria</td>
<td class="highlight_" rowspan="" colspan="">134322</td>
<td class="highlight_" rowspan="" colspan="">71</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">79349</td>
<td class="highlight_" rowspan="" colspan="">52</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">Antigua and Barbuda</td>
<td class="highlight_" rowspan="" colspan="">767</td>
<td class="highlight_" rowspan="" colspan="">76</td>
</tr>
</tbody>
</table>

For the first five countries there doesn’t seem to be any relation between wealth and life expectancy, but that might be just for those countries.

<!-- #region tags=["style-activity"] -->
### Exercise 9 Joining and transforming


#### Question

Have a go at merging dataframes with an inner join in Exercise 9 in the Exercise notebook 3.

<!-- #endregion -->

