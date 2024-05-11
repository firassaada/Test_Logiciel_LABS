# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestFeature1():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_feature1(self):
    self.driver.get("https://safatelli.github.io/tp-test-logiciel/assets/hello.html")
    self.driver.set_window_size(1536, 824)
    self.driver.find_element(By.ID, "username").click()
    self.driver.find_element(By.ID, "username").send_keys("safa")
    self.driver.find_element(By.CSS_SELECTOR, "button").click()
    self.driver.find_element(By.ID, "username").click()
    self.driver.find_element(By.ID, "username").click()
    element = self.driver.find_element(By.ID, "username")
    actions = ActionChains(self.driver)
    actions.double_click(element).perform()
    self.driver.find_element(By.ID, "username").send_keys("mariem")
    self.driver.find_element(By.CSS_SELECTOR, "button").click()
    assert self.driver.find_element(By.ID, "message").text == "Bonjour, mariem !"
  