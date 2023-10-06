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

# 4 Summary 


Phew – you made it! Well done!


![An image of a gymnast on her front with her legs split over her head](./ou_futurelearn_learn_to_code_fig_1067.jpg)


__Figure 11__


During this week you’ve learned how to take a dataset that contains multiple possible groupings or subsets of data, and work with those groups to perform a variety of transformations.

In particular, you have learned how to:

* split the data contained in a dataframe into multiple groups based on the unique ‘key’ values in a single column, or unique combinations of values that appear across two or more columns

* ``apply`` an ``aggregate`` (summary) function to generate a single summary result for the group, and then combine these results to generate a summary report with as many rows as there were groups, one summary report row per group ``-apply`` a ``filter`` function that would use the rows contained in each group as the basis for a filtering operation, returning rows from each group who’s group properties matched the filter conditions

* use a pivot table to generate a variety of summary reports.

You may not have thought of performing gymnastics with data before, but as you’ve seen, we can start to work our data quite hard if we need to get it into shape!


## 4.1 Week 7 and 8 glossary


Here are alphabetical lists, for quick look up, of what this week introduced.


---



### Concepts

An __API__ , or __application programming interface__ provides a way for computer programmes to make function or resource requests from a software application. Many online applications provide a __web API__ that allows requests to be made over the internet using web addresses or __URLs__ (uniform resource locator). A URL may include several parameters that act as arguments used to pass information into a function provided by the API. To prevent ambiguity, simple punctuation is avoided in URLs. Instead, ‘websafe’ encodings using the ASCII encoding scheme are typically used to describe punctuation characters.

The notion of __grouping__ refers to the collecting together of sets of rows based on some defining characteristic. Grouping on one or more key columns splits the dataset into separate groups, one group for each unique combination of values that appears in the dataset across the key columns. Note that not all possible combinations of cross-column key values will necessarily exist in a dataset.

The __split-apply-combine__ pattern describes a process in which a dataset is __split__ into separate groups, some function is __applied__ to the members of each separate group, and the results then __combined__ to form an output dataset.


---



---



### Functions and methods

``df.to_csv(filename,index=False)`` writes the contents of the dataframe ``df`` to a CSV file with the specified filename in the current folder. The ``index`` parameter controls whether the dataframe index is included in the output file.

``read_csv(URL,dtype={})`` can be used to read a CSV file in from a web location given the web address or URL of the file. We also made use of an additional parameter, ``dtype`` to specify the data type of specified columns in a dataframe created from a CSV file.

``df.groupby(columnName)`` or ``df.groupby(listOfColumnNames)`` is used to split a dataframe into separate groups indexed by the unique values of ``columnName`` or unique combinations of the column values specified in the ``listOfColumnNames.``

``grouped.get_group(groupName)`` is used to retrieve a particular group of rows by group name from a set of grouped items.

``grouped.groups.keys()`` is used to retrieve the names of groups that exist within a set of grouped items.

``grouped.aggregate(operation)`` applies a specified operation to a group (such as sum) and then combines the results into a single dataframe indexed by group.

``grouped.apply(myFunction)`` will apply a user defined function to the rows associated with each group in a set of grouped items and return a dataframe containing the combined rows returned from the user defined function.

``grouped.filter(myFilterFunction)`` will apply a user defined filtration function to each group in a set of grouped items that tests each group and returns a Boolean True or False value to say whether each group has passed the filter test. The ``.filter()`` function then returns a single dataframe that contains the combined rows from groups that the user defined filter function let through.

`` pivot_table(df, index=indexColumnNames, columns=columnsColumnNames, values=valueColumnName, aggfunc=aggregationFunction) `` generates a pivot table from a dataframe using unique combinations of values from one or more columns specified by the ``indexColumnNames`` list to define the row index and unique combinations of values from one or more columns specified by the ``columnsColumnNames`` list to define the columns. The pivot table cells are calculated by applying the ``aggfunc`` function to the ``valueColumnName`` column in the group of rows associated with each cell.


---



## 4.2 What next?

<!--MEDIACONTENT--><video xmlns:str="http://exslt.org/strings" width="80%" download=""><source src="./lcdab_w8_conclusion.mp4" type="video/mp4"></source></video><!--TRANSCRIPT--><table xmlns:str="http://exslt.org/strings" border="1"><tr><td>
__RUTH ALEXANDER:__ *Hello again. You've now reached the end of this course on 'learning to code for data analysis'. You've seen and experienced some of the fundamentals of programming such as basic data types and structures like numbers, strings and lists and assignments and variables to store intermediate results. You've also seen the basic techniques to obtain, clean, transform, aggregate and visualise data. With a single line of code you can filter out the missing values, join two tables or make a chart. Finally you have seen how to use interactive notebooks to write up your own data analysis as a mixture of explanatory text and runnable code. *;
*Notebooks can be easily shared among a group of colleagues or publicly which means you can make a real contribution to ongoing research and debates. We hope you're keen to apply your newly gained skills to other data sets on issues that you care about. You'll be able to find data sets you can explore and interrogate in the fields of health, education, energy, climate change, poverty, crime and many more besides. Below this video you'll find links to open data sources but don't forget that your national government or even your local authority might provide open data that's more relevant to you. In a short course like this we could only scratch the surface of coding and data analysis. *;
*We hope to have inspired you to learn more about programming, data science and data management, or even statistics. Below you'll also find links to Open University courses, qualifications and free online resources that are related to the topics of this course. Whether you continue your studies with the Open University or not we do hope you really enjoyed learning to code for data analysis. We'd love to hear your feedback and suggestions. Thanks for participating and all the best for the future. *;
</td></tr></table><!--ENDTRANSCRIPT-->

![
                figure
                ./ou_futurelearn_learn_to_code_vid_1005.jpg](./ou_futurelearn_learn_to_code_vid_1005.jpg)
<!--ENDMEDIACONTENT-->
As the course comes to an end, what’s next in your learning journey? The [National Careers Service](https://nationalcareers.service.gov.uk/?utm_source=Learn%20to%20Code%20for%20Data%20Analysis&amp;utm_medium=website&amp;utm_campaign=skillstoolkit) can help you decide your next steps with your new skills. Ruth also mentions extending your learning by investigating more open data.


---



### Exploring open data further

The last few years has seen a wide variety of local and national governments and agencies publishing data as ‘open data’ that can be freely re-used by anyone. Explore some of this data yourself, at the following links:

* 
[UK government open data site](http://data.gov.uk/) – a directory of UK public datasets


* 
[US government open data site](http://data.gov/) – the home of the US Government’s open data


* 
[Open Knowledge Global Open Data Index](http://index.okfn.org/dataset/) – a comprehensive directory of national open data initiatives


* [Open Data Inception](http://opendatainception.io) – a geographic list of over 1500 data portals around the world

* [Google Public Data Explorer](https://www.google.com/publicdata/directory) – a further list of data providers, with charts for some datasets

* 
Many towns and cities also have their own data sites: search for the name of your town and the keywords ‘open data store’


* 
Open data published by government departments and agencies such as [performance of UK schools](http://www.education.gov.uk/schools/performance/) or [prices paid for house sales in the UK](http://landregistry.data.gov.uk/app/ppd)


* 
The pandas library supports a growing number of external data sources such as [Google Analytics](http://pandas.pydata.org/pandas-docs/stable/remote_data.html).



---


__Get careers guidance__

The [National Careers Service](https://nationalcareers.service.gov.uk/find-a-course/the-skills-toolkit?utm_source=openlearn&amp;utm_medium=referral&amp;utm_campaign=skillstoolkit_completed) can help you decide your next steps with your new skills.


---



### Complete our survey

We would love to know what you thought of the course and what you plan to do next. Whether you studied the course all in one go or dipped in and out, please take our [end-of-course survey](https://www.surveymonkey.co.uk/r/BOCENDlearntocode). Your feedback is anonymous but will help us to improve what we deliver.


---


