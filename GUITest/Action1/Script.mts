Browser("Google").Navigate "http://192.168.103.60:8099/"
Set childDescriptor = Description.Create
childDescriptor("micclass").value = "WebElement"
childDescriptor("html tag").value = "H2"
Set children = Browser("Google").Page("Google").ChildObjects(childDescriptor)
clength = children.count

If clength > 1 Then
	Reporter.ReportEvent micFail, "Слишком много значений!", clength
End If

'If children(Iterator).getROProperty("innerhtml") = "Hello World!" Then
'	Reporter.ReportEvent micPass, "Тест пройден!", "Тест пройден!"
'Else 
'	Reporter.ReportEvent micFail, "Некорректное значение поля!", children(Iterator).getROProperty("innerhtml")
'End If 
