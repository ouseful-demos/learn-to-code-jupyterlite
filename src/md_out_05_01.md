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

# 1 Life expectancy project


This week I wish to see (literally, via a chart) if the life expectancy in richer countries tends to be longer.


![A photograph of an adult hand holding the hand of a baby.](./ou_futurelearn_learn_to_code_fig_1047.jpg)


__Figure 1__


Richer countries can afford to spend more on healthcare and on road safety, for example, to reduce mortality. On the other hand, richer countries may have less healthy lifestyles.

The World Bank provides loans and grants to governments of middle and low-income countries to help reduce poverty. As part of their work, the World Bank has put together hundreds of datasets on a range of issues, such as health, education, economy, energy and the effectiveness of aid in different countries. I will use two of their datasets, which you can see online by following the links below. You do not need to download the datasets.

One dataset lists the gross domestic product (GDP) for each country, in United States dollars and cents; the other lists the life expectancy, in years, for each country. The latest life expectancy data I can access is for 2013, so that will be the year I take for the GDP. The disadvantage of using the GDP and the life expectancy values for the same year is that they do not account for the time it takes for a country’s wealth to have an effect on lifestyle, healthcare and other factors influencing life expectancy.

While it is useful to have all GDPs in a common currency to compare different countries, it doesn’t make much sense to report the GDP of a whole country to a supposed precision of a US cent. I noted that the value for the USA is a round number, but it is not for other countries. This is likely due in part to the conversion of local currencies to US dollars. It makes more sense to report the GDP values in a larger unit, e.g. millions of dollars. Moreover, for those who don’t live in a country using the US dollar as the official currency, it’s probably easier to understand GDP values in their own local currency.

To sum up, this week’s project will transform currency values and combine GDP and life expectancy data.

Note that the combination is made simple by the common country names in the two datasets, but in general care has to be taken that the common attribute really means the same thing. For example, if you were combining two datasets on a common unemployment attribute, you must be sure that it was obtained in the same way as there are various ways of measuring unemployment.

I’m aware that the GDP is a crude way of comparing wealth across nations. For example, it doesn’t take population or the cost of living into account. Some of this week’s exercises will ask you to add the population data. Think of other ways to improve the analysis method, of other conversions that might be needed, and of other ways to investigate life expectancy factors.


---



### Links:

* [GDP in current US dollars](http://data.worldbank.org/indicator/NY.GDP.MKTP.CD)

* [Life expectancy at birth](http://data.worldbank.org/indicator/SP.DYN.LE00.IN)


---



## 1.1 Creating the data


I won’t yet work with the full data. Instead I will create small tables, to better illustrate this week’s concepts and techniques.

Small tables make it easier to see what is going on and to create specific data combination and transformation scenarios that test the code.

There are many ways of creating tables in pandas. One of the simplest is to define the rows as a list, with the first element of the list being the first row, the second element being the second row, etc.

Each row of a table has multiple cells, one for each column. The obvious way is to represent each row as a list too, the first element of the list being the cell in the first column, the second element corresponding to the second column, etc. To sum up, the table is represented as a list of lists.

Here is a table of the 2013 GDP of some countries, in US dollars:

``In []:``


```python

table = [
['UK', 2678454886796.7], # 1st row
['USA', 16768100000000.0], # 2nd row
['China', 9240270452047.0], # and so on...
['Brazil', 2245673032353.8],
['South Africa', 366057913367.1]
]
```


To create a dataframe, I use a pandas function appropriately called ``DataFrame()``. I have to give it two arguments: the names of the columns and the data itself. The column names are given as a list of strings, the first string being the first column name, etc.

``In []:``


```python

headings = ['Country', 'GDP (US$)']
gdp = DataFrame(columns=headings, data=table)
gdp
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country</th>
<th>GDP (US$)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">UK</td>
<td class="highlight_" rowspan="" colspan="">2.678455e+12</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">USA</td>
<td class="highlight_" rowspan="" colspan="">1.676810e+13</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">9.240270e+12</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">2.245673e+12</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">3.660579e+11</td>
</tr>
</tbody>
</table>

Note that pandas shows large numbers in scientific notation, where, for example, 3e+12 means 3×10 <sup xmlns:str="http://exslt.org/strings">12</sup> , i.e. a 3 followed by 12 zeros.

I define a similar table for the life expectancy, based on the 2013 World Bank data.

``In []:``


```python


headings = ['Country name', 'Life expectancy (years)']

table = [
['China', 75],
['Russia', 71],
['United States', 79],
['India', 66],
['United Kingdom', 81]
]
life = DataFrame(columns=headings, data=table)
life
```


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

To illustrate potential issues when combining multiple datasets, I’ve taken a different set of countries, with common countries in a different order. Moreover, to illustrate a non-numeric conversion, I’ve abbreviated country names in one table but not the other.

```{admonition} Activity<!-- #region tags=["style-activity"] -->
### Exercise 1 Creating the data


#### Question

Open the exercise notebook 3 and save it in the disk folder or upload it to the CoCalc project you created in Week 1. Then practise creating dataframes in Exercise 1.

If you’re using Anaconda, remember that to open the notebook you’ll need to navigate to it using Jupyter. Whether you’re using Anaconda or CoCalc, once the notebook is open, run the existing code before you start the exercise. When you’ve completed the exercise, save the notebook. If you need a quick reminder of how to use Jupyter, watch again the video in [Week 1 Exercise 1](https://www.open.edu/openlearn/mod/oucontent/olink.php?id=83249&amp;targetdoc=Week+1%3A+Having+a+go+at+it+Part+1&amp;targetptr=1.4)

<!-- #endregion -->
```


## 1.2 Defining functions


To make the GDP values easier to read, I wish to convert US dollars to millions of US dollars.


![An image of a large shipping container.](./ou_futurelearn_learn_to_code_fig_1048.jpg)


__Figure 2__


I have to be precise about what I mean. For example, if the GDP is 4,567,890.1 (using commas to separate the thousands, millions, etc.), what do I want to obtain? Do I want always to round down to the nearest million, making it 4 million, round to the nearest million, making it 5, or round to one decimal place, making it 4.6 million? Since the aim is to simplify the numbers and not introduce a false sense of precision, let’s round to the nearest million.

I will define my own function to do such a conversion. It’s a generic function that takes any number and rounds it to the nearest million. I will later apply the function to each value in the GDP column. It’s easier to first show the code and then explain it.

``In []:``


```python

def roundToMillions (value):
result = round(value / 1000000)
return result
```


A function definition always starts with ``def`` , which is a reserved word in Python.

After it comes the function’s name and arguments, surrounded by parenthesis, and finally a colon (:). This function just takes one argument. If there’s more than one argument, use commas to separate them.

Next comes the function’s body, where the calculations are done, using the arguments like any other variables. The body must be indented, conventionally by four spaces.

For this function, the calculation is simple. I take the value, divide it by one million, and call the built-in Python function ``round()`` to convert that number to the nearest integer. If the number is exactly mid-way between two integers, ``round()`` will pick the even integer, i.e. ``round(2.5)`` is 2 but ``round(3.5)`` is 4.Finally, I write a __return statement__ to pass the result back to the code that called the function. The ``return`` word is also reserved in Python.

The ``result`` variable just stores the rounded value temporarily and has no other purpose. It‘s better to write the body as a single line of code:

`return round(value / 1000000)`

Finally I need to test the function, by calling it with various argument values and checking whether the returned value is equal to what I expect.

``In []:``

`roundToMillions(4567890.1) == 5`

``Out[]:``

`True`

The art of testing is to find as few test cases as possible that cover all bases. And I mean all, especially those you think ‘Naaah, it’ll never happen’. It will, because data can be incorrect. Prepare for the worst and hope for the best.

So here are some more tests, even for the unlikely cases of the GDP being zero or negative, and you can probably think of others.

``In []:``

`roundToMillions(0) == 0 # always test with zero...`

``Out[]:``

`True`

``In []:``

`roundToMillions(-1) == 0 #...and negative numbers`

``Out[]:``

`True`

``In []:``

`
roundToMillions(1499999) == 1 # test rounding to the nearest
`

``Out[]:``

`True`

Now for the next conversion, from US dollars to a local currency, for example British pounds. I searched the internet for ‘average yearly USD to GBP rate’, chose a conversion service and took the value for 2013. Here’s the code and some tests.

``In []:``


```python

def usdToGbp (usd):
return usd / 1.564768 # average rate during 2013
usdToGbp(0) == 0
```


``Out[]:``

`True`

``In []:``

`usdToGbp(1.564768) == 1`

``Out[]:``

`True`

``In []:``

`usdToGbp(-1) &lt; 0`

``Out[]:``

`True`

Defining functions is such an important part of coding, that you should not skip the next exercise where you will define your own functions.

```{admonition} Activity<!-- #region tags=["style-activity"] -->
### Exercise 2 Defining functions


#### Question

Complete Exercise 2 in the Exercise notebook 3 to practise defining your own functions.

<!-- #endregion -->
```


## 1.3 What if...?


The third conversion, from abbreviated country names to full names, can’t be written as a simple formula, because each abbreviation is expanded differently.


![A world globe with pins all over the European continent](./ou_futurelearn_learn_to_code_fig_1036.jpg)


__Figure 3__


What I need is the Python code equivalent of:

* if the name is ‘UK’, return ‘United Kingdom’,

* otherwise if the name is ‘USA’, return ‘United States’,

* otherwise return the name.

The last part basically says that if the name is none of the known abbreviations, return it unchanged. Translating the English sentence to Python is straightforward.

``In []:``


```python

def expandCountry (name):
	if name == 'UK': # if the name is 'UK'
		return 'United Kingdom'
	
elif name == 'USA': # otherwise if the name is 'USA'

		return 'United States'
	else: # otherwise
		return name
expandCountry('India') == 'India'
```


``Out[]:``

`True`

Note that ‘otherwise if’ is written ``'elif'`` in Python, not ``'else if'``. As you might expect, ‘if’, ‘elif’ and ‘else’ are reserved words.

The computer will evaluate one condition at a time, from top to bottom, and execute only the instructions of the first condition that is true. Note that there is no condition after ``'else'`` , it is a ‘catch all’ in case all previous conditions fail.

Note again the colons at the end of lines and that code after the colon must be indented. That is how Python distinguishes which lines of code belong to which condition.

There are almost always many ways to write the same function. A __conditional statement__ does not need to have an ``'elif'`` or ``'else'`` part. In that case, if the condition is false, nothing happens. Here is the same function, written differently.

``In []:``


```python

def expandCountry (name):
	if name == 'UK':
		name = 'United Kingdom'
	if name == 'USA':
		name = 'United States'
	return name
```


You will see later this week an example of an ‘if-else’ statement, i.e. without the ``'elif'`` part.

```{admonition} Activity<!-- #region tags=["style-activity"] -->
### Exercise 3 What if…?


#### Question

Complete Exercise 3 in the Exercise notebook 3 to practise writing functions with conditional statements.

<!-- #endregion -->
```


## 1.4 Applying functions


Having coded the three data conversion functions, they can be applied to the GDP table.

I first select the relevant column:

``In []:``


```python

column = gdp['Country']
column
```


``Out[]:``


```python

0              UK
1             USA
2           China
3          Brazil
4    South Africa
Name: Country, dtype: object
```


Next, I use the column method ``apply()`` , which applies a given function to each cell in the column, returning a new column, in which each cell is the conversion of the corresponding original cell:

``In []:``

`column.apply(expandCountry)`

``Out[]:``


```python

0    United Kingdom
1     United States
2             China
3            Brazil
4      South Africa
Name: Country, dtype: object
```


Finally, I add that new column to the dataframe, using a new column heading:

``In []`` :



```python

gdp['Country name'] = column.apply(expandCountry)
gdp
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country</th>
<th>GDP (US$)</th>
<th>Country name</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">UK</td>
<td class="highlight_" rowspan="" colspan="">2.678455e+12</td>
<td class="highlight_" rowspan="" colspan="">United Kingdom</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">USA</td>
<td class="highlight_" rowspan="" colspan="">1.676810e+13</td>
<td class="highlight_" rowspan="" colspan="">United States</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">9.240270e+12</td>
<td class="highlight_" rowspan="" colspan="">China</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">2.245673e+12</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">3.660579e+11</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
</tr>
</tbody>
</table>

In a similar way, I can convert the US dollars to British pounds, then round to the nearest million, and store the result in a new column. I could apply the conversion and rounding functions in two separate statements, but using __method chaining__ , I can apply both functions in a single line of code. This is possible because the column returned by the first call of ``apply()`` is the context for the second call of ``apply()``. Here’s how it’s written:

``In []:``


```python

column = gdp['GDP (US$)']

result = column.apply(usdToGbp).apply(roundToMillions)

gdp['GDP (£m)'] = result
gdp
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country</th>
<th>GDP (US$)</th>
<th>Country name</th>
<th>GDP (£m)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__0__</td>
<td class="highlight_" rowspan="" colspan="">UK</td>
<td class="highlight_" rowspan="" colspan="">2.678455e+12</td>
<td class="highlight_" rowspan="" colspan="">United Kingdom</td>
<td class="highlight_" rowspan="" colspan="">1711727</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__1__</td>
<td class="highlight_" rowspan="" colspan="">USA</td>
<td class="highlight_" rowspan="" colspan="">1.676810e+13</td>
<td class="highlight_" rowspan="" colspan="">United States</td>
<td class="highlight_" rowspan="" colspan="">10716029</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__2__</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">9.240270e+12</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">5905202</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__3__</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">2.245673e+12</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">1435148</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">__4__</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">3.660579e+11</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">233937</td>
</tr>
</tbody>
</table>

Now it’s just a matter of selecting the two new columns, as the original ones are no longer needed.

``In []:``


```python

headings = ['Country name', 'GDP (£m)']
gdp = gdp[headings]
gdp
```


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

Note that method chaining only works if the methods chained return the same type of value as their context, in the same way that you can chain multiple arithmetic operators (e.g. 3+4-5) because each one takes two numbers and returns a number that is used by the next operator in the chain. In this course, methods only have two possible contexts, columns and dataframes, so you can either chain column methods that return a single column (that is a ``Series`` ), like ``apply()`` , or dataframe methods that return dataframes. For example, ``gdp.head(4).tail(2)`` is a dataframe just with China and Brazil, i.e. the last two of the first four rows of the dataframe shown above. You’ll see further examples of chaining (and an easier way to select multiple rows) later this week.

This concludes the data transformation part. After applying functions in the next exercise, you’ll learn how to combine two tables.

```{admonition} Activity<!-- #region tags=["style-activity"] -->
### Exercise 4 Applying functions


#### Question

You can practise applying functions in Exercise 4 of your Exercise notebook 3.

<!-- #endregion -->
```

