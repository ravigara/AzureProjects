This is a demo project on creating a static website hosting using Azure cloud platform

STEPS 

1.check whether you have a storage account within your subscription

2.if you have the storage account then enable the static website option inside the data management in the respective storage account

3.write the index document name and optionally add a error file path for efficiency and save the changes

4.copy the primary endpoint URL

5.go to the containers option in data storage section and find the $web 

6.if found then static website has been successfully enabled and ready to upload the files

7.upload your website files into the $web and save the changes

8.paste the primary endpoint URL into the browser to view the static website.

POTENTIAL ERRORS 
#1
if you encounter this type of error 
![![alt text]](<Screenshot 2026-02-20 191715.png>)
then check whether the index name mentioned in static website section and the index file of website files matches

#2
many may be due to incorrect details in the creation process of storage account or any policies or subscription based restriction make sure to check them before hosting the website

