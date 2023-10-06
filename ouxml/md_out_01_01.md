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

# 1 Enter the pandas


As you probably realised, this way of coding is not practical for large scale data analysis.


![An image of four giant panda cubs climbing a bamboo fence](./ou_futurelearn_learn_to_code_fig_1034.jpg)


__Figure 1__


Three lines of code were required for each country, to store the number of deaths, store the population, and calculate the death rate. With roughly 200 countries in the world, my trivial analysis would require 400 variables and typing almost 600 lines of code! Life’s too short to be spent that way.

Instead of using a separate variable for each datum, it is better to organise data as a table of rows and columns.
<table xmlns:str="http://exslt.org/strings">
<caption>Table 1</caption>
<tbody>
<tr>
<th>Country</th>
<th>Deaths</th>
<th>Population</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">6900</td>
<td class="highlight_" rowspan="" colspan="">21472</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">4400</td>
<td class="highlight_" rowspan="" colspan="">200362</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">Portugal</td>
<td class="highlight_" rowspan="" colspan="">140</td>
<td class="highlight_" rowspan="" colspan="">10608</td>
</tr>
</tbody>
</table>

In that way, instead of 400 variables, I only need one that stores the whole table. Instead of writing a mile long expression that adds 200 variables to obtain the total deaths, I’ll write a short expression that calculates the total of the ‘Deaths’ column, no matter how many countries (rows) there are.

To organise data into tables and do calculations on such tables, you and I will use the pandas module, which is included in Anaconda and CoCalc. A __module__ is a package of various pieces of code that can be used individually. The pandas module provides very extensive and advanced data analysis capabilities to compliment Python. This course only scratches the surface of pandas.

I have to tell the computer that I’m going to use a module.

``In []:``


```python

from pandas import *
```


That line of code is an __import__ statement: from the pandas module, import everything. In plain English: load into memory all pieces of code that are in the pandas module, so that I can use any of them. In the above statement, the asterisk isn’t the multiplication operator but instead means ‘everything’.

Each weekly project in this course will start with this import statement, because all projects need the pandas module.

The words __`from`__ and __`import`__ are __reserved words__ : they can’t be used as variable, function or module names. Otherwise you will get a syntax error.

``In []:``


```python

from = 100
File "<ipython-input-23-6958f0ebc10d>", line 1
from = 100
^
SyntaxError: invalid syntax
```


Jupyter notebooks show reserved words in boldface font to make them easier to spot. If you see a boldface name in an assignment (as you will for the code above), you must choose a different name.

<!-- #region tags=["style-activity"] -->
### Exercise 5 pandas


#### Question

Use Exercise 5 the Exercise notebook 1 to help you answer these questions about errors you might come across.

__ 1. What kind of error will you get if you misspell 'pandas' as 'Pandas'? __

A syntax error

Remember that after the reserved word 'from' comes a module name.

Take a look at The art of naming .

A name error, reported as an import error

The computer is expecting a name but there is no module with the name 'Pandas' in the Anaconda distribution. Remember that names are case-sensitive.


#### Question

__ 2. What kind of error will you get if you misspell 'import' as 'impart'? __

A name error

A name error only occurs when a name is undefined, but import is not a name, it’s a reserved word.

A syntax error

The computer is expecting a reserved word and anything else will raise a syntax error.


#### Question

__ 3. What kind of error will you get if you forget the asterisk? __

A name error

An asterisk is not a name so the reported error can’t be this one.

A syntax error

The statement cannot end with the reserved word 'import'; the computer is expecting an indication of what to import.

<!-- #endregion -->


## 1.1 This week’s data


For the next part of the course you’ll need to download a file of data.


![An image with a young boy wearing a medical mask, in the foreground; a patient in a South African tuberculosis clinic](./ou_futurelearn_learn_to_code_fig_1026.jpg)


__Figure 2__


I have created a table with all the data necessary for the project and saved it in an Excel file. Excel is a popular application to create, edit and analyse tabular data. You won’t need Excel to complete this course, but many datasets are provided as Excel files.

Open the data file WHO POP TB some.xls . The file is encoded using UTF-8, a character encoding that allows for accented letters. Do __not__ open or edit the file, as you may change how it is encoded, which will lead to errors later on. If you do want to look at its contents, make a copy of the file and look at the copy.

Put the data file in the same folder (or CoCalc project) where you saved your exercise notebook. Done? Great, let’s proceed to loading the data – you’ll learn how to do this in the next section.


## 1.2 Loading the data


Many applications can read files in Excel format, and pandas can too. Asking the computer to read the data looks like this:

``In []:``


```python

data = read_excel('WHO POP TB some.xls')
data
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country</th>
<th>Population (1000s)</th>
<th>TB deaths</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">0</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">21472</td>
<td class="highlight_" rowspan="" colspan="">6900</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">1</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">200362</td>
<td class="highlight_" rowspan="" colspan="">4400</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">2</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">1393337</td>
<td class="highlight_" rowspan="" colspan="">41000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">3</td>
<td class="highlight_" rowspan="" colspan="">Equatorial Guinea</td>
<td class="highlight_" rowspan="" colspan="">757</td>
<td class="highlight_" rowspan="" colspan="">67</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">4</td>
<td class="highlight_" rowspan="" colspan="">Guinea-Bissau</td>
<td class="highlight_" rowspan="" colspan="">1704</td>
<td class="highlight_" rowspan="" colspan="">1200</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">5</td>
<td class="highlight_" rowspan="" colspan="">India</td>
<td class="highlight_" rowspan="" colspan="">1252140</td>
<td class="highlight_" rowspan="" colspan="">240000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">6</td>
<td class="highlight_" rowspan="" colspan="">Mozambique</td>
<td class="highlight_" rowspan="" colspan="">25834</td>
<td class="highlight_" rowspan="" colspan="">18000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">7</td>
<td class="highlight_" rowspan="" colspan="">Portugal</td>
<td class="highlight_" rowspan="" colspan="">10608</td>
<td class="highlight_" rowspan="" colspan="">140</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">8</td>
<td class="highlight_" rowspan="" colspan="">Russian Federation</td>
<td class="highlight_" rowspan="" colspan="">142834</td>
<td class="highlight_" rowspan="" colspan="">17000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">9</td>
<td class="highlight_" rowspan="" colspan="">Sao Tome and Principe</td>
<td class="highlight_" rowspan="" colspan="">193</td>
<td class="highlight_" rowspan="" colspan="">18</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">10</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">52776</td>
<td class="highlight_" rowspan="" colspan="">25000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">11</td>
<td class="highlight_" rowspan="" colspan="">Timor-Leste</td>
<td class="highlight_" rowspan="" colspan="">1133</td>
<td class="highlight_" rowspan="" colspan="">990</td>
</tr>
</tbody>
</table>

The variable name data is not descriptive, but as there is only one dataset in our analysis, there is no possible confusion with other data, and short names help to keep the lines of code short.

The function ``read_excel()`` takes a file name as an argument and returns the table contained in the file. In pandas, tables are called __dataframes__ . To load the ``data``, I simply call the function and store the returned dataframe in a variable.

A file name must be given as a __string__ , a piece of text surrounded by quotes. The quote marks tell Python that this isn’t a variable, function or module name. Also, the quote marks state that this is a single name, even if it contains spaces, punctuation and other characters besides letters.

Misspelling the file name, or not having the file in the same folder as the notebook containing the code, results in a __file not found__ error. In the example below there is an error in the file name.

``In []:``


```python

data = read_excel('WHO POP TB same.xls')
data


---------------------------------------------

FileNotFoundError Traceback (most recent call last)

<ipython-input-25-c017b2500afa> in <module>()
----> 1 data = read_excel(‘WHO POP TB same.xls’)
2 data



/Users/mw4687/anaconda/lib/python3.4/site-packages/pandas/io/excel.py in read_excel(io, sheetname, **kwds)

130 engine = kwds.pop(‘engine’, None)
131

--> 132 return ExcelFile(io, engine=engine).parse(sheetname=sheetname, **kwds)

133
134



/Users/mw4687/anaconda/lib/python3.4/site-packages/pandas/io/excel.py in __init__(self, io, **kwds)


167 self.book = xlrd.open_workbook(file_contents=data)

168 else:

--> 169 self.book = xlrd.open_workbook(io)


170 elif engine == ‘xlrd’ and isinstance(io, xlrd.Book):

171 self.book = io



/Users/mw4687/anaconda/lib/python3.4/site-packages/xlrd/__init__.py in open_workbook(filename, logfile,
 verbosity, use_mmap, file_contents, encoding_override, formatting_info, on_demand, ragged_rows)

392 peek = file_contents[:peeksz]
393 else:
--> 394 f = open(filename, "rb")
395 peek = f.read(peeksz)
396 f.close()



FileNotFoundError: [Errno 2] No such file or directory: ‘WHO POP TB same.xls’

```


Jupyter notebooks show strings in red. If you see red characters until the end of the line, you have forgotten to type the second quote that marks the end of the string.

In the next section, find out how to select a column.


## 1.3 Selecting a column


Now you have the data, let the analysis begin!


![An image of free standing Roman columns standing against a blue sky](./ou_futurelearn_learn_to_code_fig_1035.jpg)


__Figure 3__


Let’s tackle the first part of the first question: ‘What are the total, smallest, largest and average number of deaths due to TB?’ Obtaining the total number will be done in two steps: first select the column with the TB deaths, then sum the values in that column.

Selecting a single column of a dataframe is done with an expression in the format: __`dataFrame['column name'].`__





``In []:``

`data['TB deaths']`

``Out[]:``


```python

0 6900
1 4400
2 41000
3 67
4 1200
5 240000
6 18000
7 140
8 17000
9 18
10 25000
11 990
Name: TB deaths, dtype: int64
```


Strings are verbatim text, which means that the column name must be written exactly as given in the dataframe, which you saw after loading the data. The slightest deviation leads to a __key error__ , which can be seen as a kind of name error. You can try out in the Week 2 exercise notebook what happens when misspelling the column name. The error message is horribly long. In such cases, just skip to the last line of the error message to see the type of error.

Put this learning into practice in Exercise 6.

<!-- #region tags=["style-activity"] -->
### Exercise 6 selecting a column


#### Question

In your Exercise notebook 1, select the population column and store it in a variable, so that you can use it in later exercises.

Remember that to open the notebook you’ll need to launch Anaconda and then navigate to the notebook using Jupyter. Once it’s open, run all the code.

<!-- #endregion -->

Next, you’ll learn about making calculations on a column.


## 1.4 Calculations on a column


Having selected the column with the number of deaths per country, I’ll add them with the appropriately named sum() method to obtain the overall total deaths.

A __method__ is a function that can only be called in a certain context. In this course, the context will mostly be a dataframe or a column. A __method call__ looks like a function call, but adds the context in which to call the method: ``context.methodName(argument1, argument2, ...)`` . In other words, a dataframe method can only be called on dataframes, a column method only on columns. Because methods are functions, a method call returns a value and is therefore an expression.

If all that sounded too abstract, here’s how to call the ``sum()`` method on the TB deaths column. Note that ``sum()`` doesn’t need any arguments because all the values are in the column.





``In []:``


```python

tbColumn = data['TB deaths']
tbColumn.sum()
```


``Out[]:``

`354715`

The estimated total number of deaths due to TB in 2013 in the BRICS and Portuguese-speaking countries was over 350 thousand. An impressive number, for the wrong reasons.

Calculating the minimum and maximum number of deaths is done in a similar way.

``In []:``

`tbColumn.min()`

``Out[]:``

`18`

``In []:``

`tbColumn.max()`

``Out[]:``

`240000`

Like ``sum()`` , the column methods ``min()`` and ``max()`` don’t need arguments, whereas the Python functions ``min()`` and ``max()`` did need them, because there was no context (column) providing the values.

The average number is computed as before, dividing the total by the number of countries.

``In []:``

`tbColumn.sum() / 12`

``Out[]:``

`29559.583333333332`

This kind of average is called the __mean__ and there’s a method for that.

``In []:``

`tbColumn.mean()`

``Out[]:``

`29559.583333333332`

Another kind of average measure is the __median__ , which is the number in the middle, i.e. half of the values are above the median and half below it.

``In []:``

`tbColumn.median()`

``Out[]:``

`5650.0`

The mean is five times higher than the median. While half the countries had less than 5650 deaths in 2013, some countries had far more, which pushes the mean up.

The median is probably closer to the intuition you have of what ‘average’ should mean (pun intended). News reports don’t always make clear what average measure is being used, and using the mean may distort reality. For example, the mean household income in a country will be influenced by very poor and very rich households, whereas the median income doesn’t take into account how poor or rich the extremes are: it will always be half the households below and half above the median.

Put this learning into practice in Exercise 7.

<!-- #region tags=["style-activity"] -->
### Exercise 7 calculations on a column


#### Question

Practise the use of column methods by applying them to the population column you obtained in Exercise 6 in the Exercise notebook 1. Remember to run all code before doing the exercise.

<!-- #endregion -->


## 1.5 Sorting on a column


One of the research questions was: which countries have the smallest and largest number of deaths?

Being a small table, it is not too difficult to scan the TB deaths column and find those countries. However, such a process is prone to errors and impractical for large tables. It’s much better to sort the table by that column, and then look up the countries in the first and last rows.

As you’ve guessed by now, sorting a table is another single line of code.

``In []:``

`data.sort_values('TB deaths')`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country</th>
<th>Population (1000s)</th>
<th>TB deaths</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">9</td>
<td class="highlight_" rowspan="" colspan="">Sao Tome and Principe</td>
<td class="highlight_" rowspan="" colspan="">193</td>
<td class="highlight_" rowspan="" colspan="">18</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">3</td>
<td class="highlight_" rowspan="" colspan="">Equatorial Guinea</td>
<td class="highlight_" rowspan="" colspan="">757</td>
<td class="highlight_" rowspan="" colspan="">67</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">7</td>
<td class="highlight_" rowspan="" colspan="">Portugal</td>
<td class="highlight_" rowspan="" colspan="">10608</td>
<td class="highlight_" rowspan="" colspan="">140</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">11</td>
<td class="highlight_" rowspan="" colspan="">Timor-Leste</td>
<td class="highlight_" rowspan="" colspan="">1133</td>
<td class="highlight_" rowspan="" colspan="">990</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">4</td>
<td class="highlight_" rowspan="" colspan="">Guinea-Bissau</td>
<td class="highlight_" rowspan="" colspan="">1704</td>
<td class="highlight_" rowspan="" colspan="">1200</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">1</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">200362</td>
<td class="highlight_" rowspan="" colspan="">4400</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">0</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">21472</td>
<td class="highlight_" rowspan="" colspan="">6900</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">8</td>
<td class="highlight_" rowspan="" colspan="">Russian Federation</td>
<td class="highlight_" rowspan="" colspan="">142834</td>
<td class="highlight_" rowspan="" colspan="">17000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">6</td>
<td class="highlight_" rowspan="" colspan="">Mozambique</td>
<td class="highlight_" rowspan="" colspan="">25834</td>
<td class="highlight_" rowspan="" colspan="">18000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">10</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">52776</td>
<td class="highlight_" rowspan="" colspan="">25000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">2</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">1393337</td>
<td class="highlight_" rowspan="" colspan="">41000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">5</td>
<td class="highlight_" rowspan="" colspan="">India</td>
<td class="highlight_" rowspan="" colspan="">1252140</td>
<td class="highlight_" rowspan="" colspan="">240000</td>
</tr>
</tbody>
</table>

The dataframe method ``sort_values()`` takes as argument a column name and returns a new dataframe where the rows are in ascending order of the values in that column. Note that sorting doesn’t modify the original dataframe.

``In []:``

`data # rows still in original order`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country</th>
<th>Population (1000s)</th>
<th>TB deaths</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">0</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">21472</td>
<td class="highlight_" rowspan="" colspan="">6900</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">1</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">200362</td>
<td class="highlight_" rowspan="" colspan="">4400</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">2</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">1393337</td>
<td class="highlight_" rowspan="" colspan="">41000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">3</td>
<td class="highlight_" rowspan="" colspan="">Equatorial Guinea</td>
<td class="highlight_" rowspan="" colspan="">757</td>
<td class="highlight_" rowspan="" colspan="">67</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">4</td>
<td class="highlight_" rowspan="" colspan="">Guinea-Bissau</td>
<td class="highlight_" rowspan="" colspan="">1704</td>
<td class="highlight_" rowspan="" colspan="">1200</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">5</td>
<td class="highlight_" rowspan="" colspan="">India</td>
<td class="highlight_" rowspan="" colspan="">1252140</td>
<td class="highlight_" rowspan="" colspan="">240000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">6</td>
<td class="highlight_" rowspan="" colspan="">Mozambique</td>
<td class="highlight_" rowspan="" colspan="">25834</td>
<td class="highlight_" rowspan="" colspan="">18000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">7</td>
<td class="highlight_" rowspan="" colspan="">Portugal</td>
<td class="highlight_" rowspan="" colspan="">10608</td>
<td class="highlight_" rowspan="" colspan="">140</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">8</td>
<td class="highlight_" rowspan="" colspan="">Russian Federation</td>
<td class="highlight_" rowspan="" colspan="">142834</td>
<td class="highlight_" rowspan="" colspan="">17000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">9</td>
<td class="highlight_" rowspan="" colspan="">Sao Tome and Principe</td>
<td class="highlight_" rowspan="" colspan="">193</td>
<td class="highlight_" rowspan="" colspan="">18</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">10</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">52776</td>
<td class="highlight_" rowspan="" colspan="">25000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">11</td>
<td class="highlight_" rowspan="" colspan="">Timor-Leste</td>
<td class="highlight_" rowspan="" colspan="">1133</td>
<td class="highlight_" rowspan="" colspan="">990</td>
</tr>
</tbody>
</table>

It’s also possible to sort on a column that has text instead of numbers; the rows will be sorted in alphabetical order.

``In []:``

`data.sort_values('Country')`

``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country</th>
<th>Population (1000s)</th>
<th>TB deaths</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">0</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">21472</td>
<td class="highlight_" rowspan="" colspan="">6900</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">1</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">200362</td>
<td class="highlight_" rowspan="" colspan="">4400</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">2</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">1393337</td>
<td class="highlight_" rowspan="" colspan="">41000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">3</td>
<td class="highlight_" rowspan="" colspan="">Equatorial Guinea</td>
<td class="highlight_" rowspan="" colspan="">757</td>
<td class="highlight_" rowspan="" colspan="">67</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">4</td>
<td class="highlight_" rowspan="" colspan="">Guinea-Bissau</td>
<td class="highlight_" rowspan="" colspan="">1704</td>
<td class="highlight_" rowspan="" colspan="">1200</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">5</td>
<td class="highlight_" rowspan="" colspan="">India</td>
<td class="highlight_" rowspan="" colspan="">1252140</td>
<td class="highlight_" rowspan="" colspan="">240000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">6</td>
<td class="highlight_" rowspan="" colspan="">Mozambique</td>
<td class="highlight_" rowspan="" colspan="">25834</td>
<td class="highlight_" rowspan="" colspan="">18000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">7</td>
<td class="highlight_" rowspan="" colspan="">Portugal</td>
<td class="highlight_" rowspan="" colspan="">10608</td>
<td class="highlight_" rowspan="" colspan="">140</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">8</td>
<td class="highlight_" rowspan="" colspan="">Russian Federation</td>
<td class="highlight_" rowspan="" colspan="">142834</td>
<td class="highlight_" rowspan="" colspan="">17000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">9</td>
<td class="highlight_" rowspan="" colspan="">Sao Tome and Principe</td>
<td class="highlight_" rowspan="" colspan="">193</td>
<td class="highlight_" rowspan="" colspan="">18</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">10</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">52776</td>
<td class="highlight_" rowspan="" colspan="">25000</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">11</td>
<td class="highlight_" rowspan="" colspan="">Timor-Leste</td>
<td class="highlight_" rowspan="" colspan="">1133</td>
<td class="highlight_" rowspan="" colspan="">990</td>
</tr>
</tbody>
</table>

<!-- #region tags=["style-activity"] -->
### Exercise 8 sorting on a column


#### Question

Use the Exercise notebook 1 to sort the table by population so that you can quickly see which are the least and the most populous countries. Remember to run all code before doing the exercise.

<!-- #endregion -->

In the next section you’ll learn about calculations over columns.


## 1.6 Calculations over columns


The last remaining task is to calculate the death rate of each country.

You may recall that with the simple approach I’d have to write:


```python


rateAngola = deathsInAngola * 100 / populationOfAngola


rateBrazil = deathsInBrazil * 100 / populationOfBrazil

```


and so on, and so on. If you’ve used spreadsheets, it’s the same process: create the formula for the first row and then copy it down for all the rows. This is laborious and error-prone, e.g. if rows are added later on. Given that data is organised by columns, wouldn’t it be nice to simply write the following?

`rateColumn = deathsColumn * 100 / populationColumn`

Say no more: your wish is pandas’s command.

``In []:``


```python

deathsColumn = data['TB deaths']
populationColumn = data['Population (1000s)']
rateColumn = deathsColumn * 100 / populationColumn
rateColumn
```


``Out[]:``

0 32.134873

1 2.196025

2 2.942576

3 8.850727

4 70.422535

5 19.167186

6 69.675621

7 1.319759

8 11.901928

9 9.326425

10 47.370017

11 87.378641

dtype: float64

Tadaaa! With pandas, the arithmetic operators become much smarter. When adding, subtracting, multiplying or dividing columns, the computer understands that the operation is to be done row by row and creates a new column.

All well and nice, but how to put that new column into the dataframe, in order to have everything in a single table? In an assignment ``variable = expression`` , if the variable hasn’t been mentioned before, the computer creates the variable and stores in it the expression’s value. Likewise, if I assign to a column that doesn’t exist in the dataframe, the computer will create it.

``In []:``


```python

data['TB deaths (per 100,000)'] = rateColumn
data
```


``Out[]:``
<table xmlns:str="http://exslt.org/strings">
<caption></caption>
<tbody>
<tr>
<th></th>
<th>Country</th>
<th>Population (1000s)</th>
<th>TB deaths</th>
<th>TB deaths (per 100,000)</th>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">0</td>
<td class="highlight_" rowspan="" colspan="">Angola</td>
<td class="highlight_" rowspan="" colspan="">21472</td>
<td class="highlight_" rowspan="" colspan="">6900</td>
<td class="highlight_" rowspan="" colspan="">32.134873</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">1</td>
<td class="highlight_" rowspan="" colspan="">Brazil</td>
<td class="highlight_" rowspan="" colspan="">200362</td>
<td class="highlight_" rowspan="" colspan="">4400</td>
<td class="highlight_" rowspan="" colspan="">2.196025</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">2</td>
<td class="highlight_" rowspan="" colspan="">China</td>
<td class="highlight_" rowspan="" colspan="">1393337</td>
<td class="highlight_" rowspan="" colspan="">41000</td>
<td class="highlight_" rowspan="" colspan="">2.942576</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">3</td>
<td class="highlight_" rowspan="" colspan="">Equatorial Guinea</td>
<td class="highlight_" rowspan="" colspan="">757</td>
<td class="highlight_" rowspan="" colspan="">67</td>
<td class="highlight_" rowspan="" colspan="">8.850727</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">4</td>
<td class="highlight_" rowspan="" colspan="">Guinea-Bissau</td>
<td class="highlight_" rowspan="" colspan="">1704</td>
<td class="highlight_" rowspan="" colspan="">1200</td>
<td class="highlight_" rowspan="" colspan="">70.422535</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">5</td>
<td class="highlight_" rowspan="" colspan="">India</td>
<td class="highlight_" rowspan="" colspan="">1252140</td>
<td class="highlight_" rowspan="" colspan="">240000</td>
<td class="highlight_" rowspan="" colspan="">19.167186</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">6</td>
<td class="highlight_" rowspan="" colspan="">Mozambique</td>
<td class="highlight_" rowspan="" colspan="">25834</td>
<td class="highlight_" rowspan="" colspan="">18000</td>
<td class="highlight_" rowspan="" colspan="">69.675621</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">7</td>
<td class="highlight_" rowspan="" colspan="">Portugal</td>
<td class="highlight_" rowspan="" colspan="">10608</td>
<td class="highlight_" rowspan="" colspan="">140</td>
<td class="highlight_" rowspan="" colspan="">1.319759</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">8</td>
<td class="highlight_" rowspan="" colspan="">Russian Federation</td>
<td class="highlight_" rowspan="" colspan="">142834</td>
<td class="highlight_" rowspan="" colspan="">17000</td>
<td class="highlight_" rowspan="" colspan="">11.901928</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">9</td>
<td class="highlight_" rowspan="" colspan="">Sao Tome and Principe</td>
<td class="highlight_" rowspan="" colspan="">193</td>
<td class="highlight_" rowspan="" colspan="">18</td>
<td class="highlight_" rowspan="" colspan="">9.326425</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">10</td>
<td class="highlight_" rowspan="" colspan="">South Africa</td>
<td class="highlight_" rowspan="" colspan="">52776</td>
<td class="highlight_" rowspan="" colspan="">25000</td>
<td class="highlight_" rowspan="" colspan="">47.370017</td>
</tr>
<tr>
<td class="highlight_" rowspan="" colspan="">11</td>
<td class="highlight_" rowspan="" colspan="">Timor-Leste</td>
<td class="highlight_" rowspan="" colspan="">1133</td>
<td class="highlight_" rowspan="" colspan="">990</td>
<td class="highlight_" rowspan="" colspan="">87.378641</td>
</tr>
</tbody>
</table>

That’s it! I’ve written all the code needed to answer the questions I had. Next I’ll write up the analysis into a succinct and stand-alone notebook that can be shared with friends, family and colleagues or the whole world. You’ll find that in the next section.

